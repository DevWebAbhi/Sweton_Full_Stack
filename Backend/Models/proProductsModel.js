const mongoose=require('mongoose');


const schema=mongoose.Schema({
    title:{type:String,required:true},
    series:{type:String,required:true},
    responseCurve:{type:String,required:true},
    images:{type:Array,required:true},
    description:{type:String,required:true},
    programPower:{type:String,required:true},
    voiceCoil:{type:String,required:true},
    response:{type:String,required:true},
    senstivity:{type:String,required:true},
    nominalDiameter:{type:String,required:true},
    nominalImpedance:{type:String,required:true},
    nominalPowerHandling:{type:String,required:true},
    magnetMaterial:{type:String,required:true},
    windingMaterial:{type:String,required:true},
    formerMaterial:{type:String,required:true},
    windingType:{type:String,required:true},
    resonantFrequency:{type:String,required:true},
    DCResistance:{type:String,required:true},
    electrialQ:{type:String,required:true},
    mechnicalQ:{type:String,required:true},
    totalQ:{type:String,required:true},
    complianceEquivalentVoloume:{type:String,required:true},
    peekDiaphamDisplacementVoloume:{type:String,required:true},
    effectiveSurfaceAreaOfCone:{type:String,required:true},
    referanceEfficiency:{type:String,required:true},
    movingMassIncludingAirLoad:{type:String,required:true},
    motorStrenghth:{type:String,required:true},
    voiceCoilInductance:{type:String,required:true},
    effectiveBandwidthProduct:{type:String,required:true},
    voiceCoilOverhang:{type:String,required:true},
    overAllDiameter:{type:String,required:true},
    boltCircleDiameter:{type:String,required:true},
    baffleCutOutDiameter:{type:String,required:true},
    depth:{type:String,required:true},
    flangeAndGasketThikness:{type:String,required:true},
    grossWeight:{type:String,required:true},
    reconeKitNumber:{type:String,required:true},
})

const proLoudSpeakerModel=mongoose.model('ProLoudSpeaker',schema);

module.exports={
proLoudSpeakerModel
}