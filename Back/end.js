const express = require('express');
const bodyParser = require('body-parser');
var dao = require("./server");
const {PythonShell} = require('python-shell');

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
    let name = req.body.name;
    let password = req.body.password;
    let phone = req.body.phone_number;
    let role = req.body.job_role;
    let location = req.body.work_location;
    let salary;

    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: 'C:/final/searchable_enterprise_directory/Back/data_science', //If you are having python_test.py script in same folder, then it's optional.
        args: [role, location] //An argument which can be accessed in the script using sys.argv[1]
    };
 
    await PythonShell.run('predict_salary.py', options).then(results=>{
        salary = parseInt(parseInt(results[1]))
    });
    //button event
    await dao.register(name, password, phone, role, location, salary, (result)=>{
        res.send(result);
    })
});

app.post("/login", async (req, res) => {
    id = req.body.employee_id
    console.log(id)
    pw = req.body.password
    //button event 
    await dao.login(id, pw, (result)=>{
        console.log("result: " + result);
        res.send(result);
    })
});

// start the rest service
var port = 4000;
console.log('service opening on port: ' + port)
app.listen(port);