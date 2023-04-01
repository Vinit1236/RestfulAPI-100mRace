const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
     rank:{
        type:Number,
        required:true,
        unique:true
     },
     name:{
        type:String,
        required:true,
        trim:true
     },
     country:{
        type:String,
        required:true,
        trim:true
     },
     year:{
        type:Number,
        required:true,
        trim:true
     },
     event:{
        type:String,
        // default:"100m Race"
     }
});
// we are creating a new collection
const MensRanking = new mongoose.model("MenRanking",menSchema);
module.exports = MensRanking;