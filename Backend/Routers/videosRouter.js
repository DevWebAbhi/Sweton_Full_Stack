const videosModel=require("../Models/videosModal");

const express=require('express');

const videoRouter=express.Router();

videoRouter.get('/',async(req,res)=>{

    try {
        const data=await videosModel.find({});
        res.status(200).send({msg:"sucessfull",data });
    } catch (error) {
        res.status(404).send({msg:"error occured"});
    }
})


videoRouter.post('/post',async(req,res)=>{
    const {link}=req.body;
    try {
        const data=await videosModel({
            link
        });
        await data.save();
        res.status(200).send({msg:"sucessfull" });
    } catch (error) {
        res.status(404).send({msg:"error occured"});
    }
})


module.exports=videoRouter;