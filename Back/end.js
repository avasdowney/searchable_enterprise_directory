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

// get employees
app.get("/Employee", async (req, res) => {
    //button event 
    await dao.findEmployees((result)=>{
        console.log("result: " + result);
        res.send(result);
    })
});

// get employee by ID
app.get("/Employee/:id", async (req, res) => {
    //button event 
    await dao.findEmployeeByID(req.params.id, (result)=>{
        console.log("result: " + result);
        res.send(result);
    })
});

app.post("/register", async (req, res) => {
    //button event 
    await dao.register((result)=>{
        console.log("result: " + result);
        res.send(result);
    })
});

// start the rest service
var port = 4000;
console.log('service opening on port: ' + port)
app.listen(port);