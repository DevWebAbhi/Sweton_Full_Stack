const mongoose=require('mongoose');

const MONGO_URL=process.env.MONGO_URL;

const connect=mongoose.connect(`mongodb+srv://tiwariabhishek889912:mongodb@cluster.62hpvic.mongodb.net/`);



module.exports={
    connect
}