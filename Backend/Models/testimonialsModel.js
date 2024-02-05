const mongoose=require('mongoose');

const schema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    type:{type:String,required:true,enums:['web','comment'],default:'comment'},
    website:{type:String},
    rating:{type:Number,required:true,enums:[1,2,3,4,5],default:5}
})

const testimonialsModel=mongoose.model('testimonials',schema);

module.exports={
testimonialsModel
}