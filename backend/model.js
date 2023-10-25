// const { string } = require('i/lib/util');

const mongoose =require("mongoose");


const connection = mongoose.model("",
 new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rate:Number,
    count:Number,
    id:Number

 }),"Apiecome"
)
module.exports = connection