const mongoose=require("mongoose");

const schema=mongoose.Schema({
    title:{type:String,required:true},
    spkimg:{type:String,required:true},
    continueousProgramPower:{type:String,required:true},
    senstivity:{type:String,required:true},
    voiceCoilDiameter:{type:String,required:true}
});

const proSpeakerSeriesModel=mongoose.model("proSpeakerSeries",schema);

module.exports={
    proSpeakerSeriesModel
}