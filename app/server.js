const express = require("express");
const app = express();
const{MONGODB_USER, 
    MONGODB_PASSWORD, 
    MONGODB_DATABASE, 
    MONGODB_DOCKER_PORT, 
    NODE_DOCKER_PORT,DB_HOST} = process.env;

const mongoose = require("mongoose");
const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${DB_HOST}:${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("CONNECTION OPEN");
}).catch((err)=>{
    console.log("OH NO ERROR!");
    console.log(err);
});

app.get('/',(req,res)=>{
    res.send(`<h2>${url}</h2>`);
})

app.listen(NODE_DOCKER_PORT, ()=>{
    console.log(`server is running on port ${NODE_DOCKER_PORT}.`);
    console.log(`blah ${NODE_DOCKER_PORT}`);
    console.log(DB_HOST);
});