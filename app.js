const express=require("express")

const app =express();

app.use(express.json())

//route import 

const product =require("./router/productRoute")

app.use("/api",product)
 
module.exports=app;
