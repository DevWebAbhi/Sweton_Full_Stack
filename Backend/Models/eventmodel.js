const mongoose=require('mongoose');

const schema=mongoose.Schema({
    title:{type:String,required:true},
    year:{type:Number,required:true},
    noOfImage:{type:Number,required:true},
    image:{type:Array,required:true},
   
    about:{type:String,required:true}
});

const eventModel=mongoose.model('events',schema);

module.exports=eventModel;