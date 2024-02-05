const express=require('express');
const {proSpeakerSeriesModel}=require('../Models/proSPKSeriesModel');
const proSPKSeriesRouter=express.Router();

proSPKSeriesRouter.get('/',async(req,res)=>{
    try {
        const data=await proSpeakerSeriesModel.find();
      
        res.status(200).send({message:'Sucessfull',data:data});
    } catch (error) {
        res.status(400).send({message:'Bad Request'})
    }
});

proSPKSeriesRouter.post('/post',async(req,res)=>{
        const{spkimg,continueousProgramPower,senstivity,voiceCoilDiameter}=req.body;
        console.log(req.body)
    try {
        const data=await proSpeakerSeriesModel({
            spkimg,continueousProgramPower,senstivity,voiceCoilDiameter
        });
        await data.save();
        res.status(200).send({message:'Sucessfull'});
    } catch (error) {
        res.status(400).send({message:'Bad Request'})
    }
})

proSPKSeriesRouter.delete('/delete',async(req,res)=>{
    const {id}=req.body;
    try {
        await proSpeakerSeriesModel.deleteOne({_id:id});
        res.status(200).send({message:'Sucessfull'});
    } catch (error) {
        res.status(400).send({message:'Bad Request'})
    }
})

module.exports={
    proSPKSeriesRouter
}