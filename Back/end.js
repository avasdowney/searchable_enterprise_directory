const express = require('express');
const bodyParser = require('body-parser');
var dao = require("./server");

// server app
var app = express();

//Parse JSON body
app.use(bodyParser.json());

//
app.get("/register", (req, res) => {
    //button event 
    dao.registerUser('getplanets',{}, (result)=>{
        console.log("result: " + result);
        res.send(result);
    })
});