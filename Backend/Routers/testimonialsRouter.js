const express=require('express');

const multer = require('multer');
const fs = require('fs');
const HTTP=process.env;

const{testimonialsModel}=require('../Models/testimonialsModel')

const testimonialsRouter=express.Router();



testimonialsRouter.get('/',async(req,res)=>{

  try {
    const data=await testimonialsModel.find({});

    res.status(200).send({message:'Sucessful',data:data});
  } catch (error) {
    res.status(400).send({message:'Bad Request'});
  }
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const destinationPath = './Assets/Testimonials';
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


testimonialsRouter.post('/post',async(req,res)=>{
    try {

      

        upload(req, res,async function (err) {
            if (err) {
              console.error(err);
              return res.status(500).send(err.message);
            }
            
            console.log(req.files);
            console.log(req.body);


            const{title,description,type,website,rating}=req.body;
            
            const image=`${HTTP.HTTP}`+'files/Testimonials/'+`${req.files[0].filename}`;
            const data=await testimonialsModel({
             title,description,type,website,rating,image
            })

           
            await data.save();
            
          });
          res.status(200).send({message:'sucessful'})

        
    } catch (error) {
        res.status(400).send({message:'Bad Request'});
    }
});


module.exports=testimonialsRouter;