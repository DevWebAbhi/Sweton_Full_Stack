const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { connect } = require('./mongoDBConnection');
const googleUserModel=require('./Models/googleUserModel');
const userModel=require('./Models/userModel');

const app = express();
const PORT = process.env.PORT;
const JWT_PASSCODE=process.env.JWT_PASSCODE;


app.use(cors());
app.use(cors({ origin: 'https://sweton-full-stack-612603mqd-devwebabhi.vercel.app' }));
app.use(express.json());
require('dotenv').config();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

// Set the view engine to EJS


const authRouter = require('./GoogleAuthentication/authRouter');
const videoRouter = require('./Routers/videosRouter');
const testimonialsRouter = require('./Routers/testimonialsRouter');
const { proSPKSeriesRouter } = require('./Routers/proSPKSeriesRouter');
const eventRouter = require('./Routers/eventRouter');
const userRouter = require('./Routers/userRouter');
const { proLoudSpeakerRouter } = require('./Routers/proLoudSpeakerRouter');

app.get('/', (req, res) => {
  res.status(200).send({ message: 'This is Sweton Backend Application' });
});

app.use("/files", express.static(__dirname + '/Assets'));

app.use('/testimonials', testimonialsRouter);
app.use('/proSPKSeries', proSPKSeriesRouter);
app.use('/events', eventRouter);
app.use('/proloud', proLoudSpeakerRouter);
app.use('/user', userRouter);
app.use('/videos', videoRouter);
app.use('/cart/post',async(req,res)=>{
   const token=req.header('authorization');
  
try {
 
  const decoded = jwt.verify(token, process.env.JWT_PASSCODE);
  console.log(req.body.id)
  if(decoded){
   if(decoded.type=='google'){
    const data=await googleUserModel.findOne({userID:decoded.userId});
    console.log(data)
    if(data){
     let cart=data.cart;
     
     if(req.body.id.length!=0){
      if(req.body.id!='get'){
        cart.push(req.body.id);
      }
    await googleUserModel.updateOne({userID:decoded.userId},{$set:{cart:cart}});
    res.status(200).send({msg:'authorized',data:cart});
     }else{
      res.status(200).send({msg:'Not a valid product ID',data:''});
     }
      }
   }else if(decoded.type=='local'){
    const data=await userModel.find({userID:decoded.userId});
    console.log(data)
    if(data){
      let temp=data.cart;
      temp.push(req.body.productID);
      const newData= await userModel.updateOne({
        userID:decoded.userId,$set:{cart:temp}
      });
     
     
      res.status(200).send({msg:'authorized',data:temp});
    }
   }
  }else{
    res.status(200).send({msg:'not authorized',data:''});
  }
  console.log('something else')

} catch (error) {
  
  res.status(500).send({msg:'internal server error',data:''});
}
});
// Use the authRouter for authentication routes
app.use('/auth', authRouter);

/* 
  Handling unimplemented routes
*/
app.get('*', (req, res) => {
  res.sendStatus(501).send({ message: 'Not Implemented' });
});

app.post('*', (req, res) => {
  res.sendStatus(501).send({ message: 'Not Implemented' });
});

app.delete('*', (req, res) => {
  res.sendStatus(501).send({ message: 'Not Implemented' });
});

app.put('*', (req, res) => {
  res.sendStatus(501).send({ message: 'Not Implemented' });
});

app.head('*', (req, res) => {
  res.sendStatus(501).send({ message: 'Not Implemented' });
});

app.options('*', (req, res) => {
  res.sendStatus(501).send({ message: 'Not Implemented' });
});

app.listen(process.env.PORT, async () => {
  try {
    await connect;
    console.log('Connected to mongodb atlas');
  } catch (error) {
    console.log(error);
  }
});