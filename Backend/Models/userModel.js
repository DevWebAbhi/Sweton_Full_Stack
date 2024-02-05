const mongoose=require('mongoose');

const schema=mongoose.Schema(
    {
        userName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        cart:{type:Object,required:true}
    }
);

const userModel=mongoose.model('Users',schema);

module.exports=userModel;