const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const connectDB = () => { 
  mongoose
    .connect(DB)
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log("the error is ", err));
};

module.exports = connectDB;
// # DB="mongodb://localhost:27017/Ecommerce"
     