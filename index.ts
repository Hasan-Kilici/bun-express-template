const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
 res.send("Hello world")
})

app.listen(3000,()=>{
  console.log("Website hosting in 3000 port");
})
