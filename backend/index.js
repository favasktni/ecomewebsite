const express = require('express');
const app = express();
const mongoose =require("mongoose");
const cors= require("cors");
const model = require("./model")

mongoose.connect("mongodb://0.0.0.0:27017/Ecome").then(()=>{
    app.listen(3000, ()=>{
        console.log("listening");
    })
})

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"*"
}))
app.get("/Ecome", async (req,res)=>{
    const products = await model.find();
    res.send(products)
})

// {
    // "title":"",
    //   "price":"",
    //   "image":"",
    //   "description":"",
    //   "category":"",
    //   "rate":"",
    //   "count":""
//     }