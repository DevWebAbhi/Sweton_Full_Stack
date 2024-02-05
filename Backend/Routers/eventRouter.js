const express = require('express');
const eventModel = require('../Models/eventmodel');
const eventRouter = express.Router();
const multer = require('multer');
const fs = require('fs');
const HTTP=process.env.HTTP;




eventRouter.get('/', async (req, res) => {
  try {
    const data = await eventModel.find({});
    res.status(200).send({ message: 'successful', data }); // Assuming you want to send the data as well
  } catch (error) {
    res.status(400).send({ message: 'Bad Request' });
  }
});





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = './Assets/RecentEvents';
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true });
    }

    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalExtension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + originalExtension);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: function (req, file, cb) {
    
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'));
    }
  },
}).array('Images', 12);

eventRouter.post('/post', async(req, res, next) => {
  try {
    upload(req, res,async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send(err.message);
      }
      let arr=[];
      for(let i=0;i<req.files.length;i++){
        arr.push(HTTP+'files/RecentEvents/'+req.files[i].filename);
      }
      const{title,year,noOfImage,about}=req.body;
      
      const data=await eventModel({
        title,year,noOfImage,image:arr,about
      })
     
      await data.save();
      
    });
    res.status(200).send({message:'sucessful'})
  } catch (error) {
    res.status(400).send({message:'Bad Request'});
  }
});


module.exports = eventRouter;