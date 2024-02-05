const mongoose=require('mongoose');

const schema=mongoose.Schema({
    image:{type:String,required:true},
    continuousProgramPower:{type:String,required:true},
    senstivity:{type:String,required:true},
    voiceCoilDiameter:{type:String,required:true}
})

const model=mongoose.model('HomeProLoudeSpeaker',schema);

module.exports=model;