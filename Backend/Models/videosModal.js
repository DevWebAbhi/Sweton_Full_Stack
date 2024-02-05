const mongoose=require('mongoose');

const schema=mongoose.Schema({
    link:{type:String,required:true}
});

const videosModel=mongoose.model('videos',schema);

module.exports=videosModel;