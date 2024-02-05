const express=require('express');

const {proLoudSpeakerModel}=require('../Models/proProductsModel')

const proLoudSpeakerRouter=express.Router();
const multer = require('multer');
const fs = require('fs');
const HTTP=process.env.HTTP;




proLoudSpeakerRouter.get('/',async(req,res)=>{
    try {
        const data=await proLoudSpeakerModel.find({});

        res.status(200).send({message:'sucessful',data:data});
    } catch (error) {
        res.status(400).send({message:'Bad Request'});
    }
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const destinationPath = './Assets/proLoudSpeakerImageStorage';
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
  }).fields([
    { name: 'responseCurve', maxCount: 1 },
    { name: 'Images', maxCount: 12 },
  ]);

 

  proLoudSpeakerRouter.post('/post',async(req,res)=>{
    try {
        upload(req, res,async function (err) {
            if (err) {
              console.error(err);
              return res.status(500).send(err.message);
            }
            let resCurve='noImg';
            let arr=[];
            for(let i=0;i<req.files.Images.length;i++){
              
                
                    arr.push(HTTP+'files/proLoudSpeakerImageStorage/'+req.files.Images[i].filename);
              
              }
              if(req.files.responseCurve){
                
                
                  
                  resCurve=HTTP+'files/proLoudSpeakerImageStorage/'+req.files.responseCurve[0].filename;
              }
              
           
            const{title,series,description,programPower,voiceCoil,response,senstivity,nominalDiameter,nominalImpedance,nominalPowerHandling,magnetMaterial,windingMaterial,formerMaterial,windingType,resonantFrequency,DCResistance,electrialQ,mechnicalQ,totalQ,complianceEquivalentVoloume,peekDiaphamDisplacementVoloume,effectiveSurfaceAreaOfCone,referanceEfficiency,movingMassIncludingAirLoad,motorStrenghth,voiceCoilInductance,effectiveBandwidthProduct,voiceCoilOverhang,overAllDiameter,boltCircleDiameter,baffleCutOutDiameter,depth,flangeAndGasketThikness,grossWeight,reconeKitNumber}=req.body;  
            const data=await proLoudSpeakerModel({
                title,series,responseCurve:resCurve,images:arr,description,programPower,voiceCoil,response,senstivity,nominalDiameter,nominalImpedance,nominalPowerHandling,magnetMaterial,windingMaterial,formerMaterial,windingType,resonantFrequency,DCResistance,electrialQ,mechnicalQ,totalQ,complianceEquivalentVoloume,peekDiaphamDisplacementVoloume,effectiveSurfaceAreaOfCone,referanceEfficiency,movingMassIncludingAirLoad,motorStrenghth,voiceCoilInductance,effectiveBandwidthProduct,voiceCoilOverhang,overAllDiameter,boltCircleDiameter,baffleCutOutDiameter,depth,flangeAndGasketThikness,grossWeight,reconeKitNumber
            })
          
            await data.save();
            
          });
          res.status(200).send({message:'sucessful'})
    } catch (error) {
        res.status(400).send({message:'Bad Request'});
    }
  })

module.exports={
    proLoudSpeakerRouter
}