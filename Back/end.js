const express = require('express');
const bodyParser = require('body-parser');
var dao = require("./server"); 

// import { registerUser } from './server';

// server app
var app = express();
// console.log("hello")
// console.log("hi")

//Parse JSON body
app.use(bodyParser.json());

// get employee by ID
app.get("/:id", async (req, res) => {
    //button event 
    await dao.findEmpID(req.params.id, (result)=>{
        console.log("result: " + result);
        res.send(result);
    })
});

// start the rest service
var port = 4000;
console.log('service opening on port: ' + port)
app.listen(port);