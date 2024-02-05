const mongoose=require('mongoose');

const schema=mongoose.Schema(
    {
        userName:{type:String,required:true},
        email:{type:String,required:true},
        userID:{type:String,required:true},
        cart:{type:Array,required:true},
    }
);

const googleUserModel=mongoose.model('googleUsers',schema);

module.exports=googleUserModel;