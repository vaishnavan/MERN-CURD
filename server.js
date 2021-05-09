const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const URI = "mongodb+srv://myprocre:Vaish@123@cluster0.b3qp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require('./controller/userRoute'));

app.listen((process.env.PORT || 5000), () =>{
    console.log("server connected");
})

mongoose.connect((URI), {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(!err){
        console.log("Database connected");
    }else{
        console.log(err);
    }
})