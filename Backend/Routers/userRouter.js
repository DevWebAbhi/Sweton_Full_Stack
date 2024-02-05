const userModel=require('../Models/userModel');
const express=require('express');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
const userRouter=express.Router();
const JWT_PASSCODE=process.env.JWT_PASSCODE;
userRouter.post('/login',async(req,res)=>{
try {
    const{userName,email,password}=req.body;
    var hash = bcrypt.hashSync("B4c0/\/", salt);
} catch (error) {
    res.status(404).send({msg:'Error Occured'});
}
});


userRouter.post('/signup',async(req,res)=>{
    const{userName,email,password}=req.body;
    console.log(userName)
    try {
        
        
        const hash =await bcrypt.hashSync(password, salt);
        const data=await userModel({
            userName,email,password:hash
        });
        await data.save();
        
       const token =await jwt.sign({ userID:data.id ,type:'local'}, JWT_PASSCODE);
       
        res.status(200).send({msg:'sucessfull',token});
    } catch (error) {
        
        res.status(404).send({msg:'Error Occured'});
    }
    });

    module.exports=userRouter;