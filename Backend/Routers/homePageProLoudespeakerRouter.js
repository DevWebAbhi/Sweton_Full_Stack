const express=require('express');

const model=require('../Models/homePageProLoudespeakerModel');
const homeProLoudespeakerRouter=express.Router();

homeProLoudespeakerRouter.get('/',async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).send({message:'Bad Request'})
    }
})