const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/Org';

// Database Name
const dbName = 'Org';
let db;
//Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   db = client.db(dbName);
//   console.log('db')
//   console.log(db)

// //   client.close();
// });

const client = new MongoClient(url);
console.log('here');
let col;
try {
    client.connect();
    console.log('we have connected')
    db = client.db("Org");
    col = db.collection("EmployeeDB");

    
    
} catch (e) {
    console.error(e);
}

// console.log(x)

//finds all employees
module.exports.findEmployees = async function (callback) {
    console.log("inside the function")
    // console.log(await col.find().toArray())
    callback(await col.find().toArray())
    // await col.find().toArray(async(err, result) => {
    //     console.log("a")
    //   if (!err) {
    //     callback(null, result);
    //   } else {
    //     callback("Failed to find planets", undefined);
    //   }
    // });
  };

module.exports.findEmployeeByID = async function (id, callback) {
    id = parseInt(id)
    temp = (await col.find({employee_id: id}).toArray())
    // console.log(await col.find().toArray())
    callback(temp)
    // await col.find({employee_id: id}).toArray(async(err, result) => {
    //     console.log("a")
    //   if (!err) {
    //     callback(null, result);
    //   } else {
    //     callback("Failed to find planets", undefined);
    //   }
    // });
  };

module.exports.register = async function (name, password, phone, role, location, callback) {
    console.log("register")
    count = (await col.countDocuments())
    new_id = count + 10000
    let salary;
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
          scriptPath: 'C:\final\searchable_enterprise_directory\frontend\search-enterprise\src\components', //If you are having python_test.py script in same folder, then it's optional.
        args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
    };
     
 
    PythonShell.run('python_test.py', options, function (err, result){
          if (err) throw err;
          // result is an array consisting of messages collected
          //during execution of script.
          console.log('result: ', result.toString());
          salary = parseInt(result)
          res.send(result.toString())
    });

    temp = {
        "name": name,
        "password": password,
        "employee_id": new_id,
        "phone_number": phone,
        "job_role": role,
        "work_location": location,
        "salary": salary,
        "manager_id": "", 
    }
    let object = {
        "message": "Succesfull insert",
        "UserID": new_id
    }
    await col.insertOne(temp)
    callback(object)



    // await col.find().toArray(async(err, result) => {
    //     console.log("a")
    //   if (!err) {
    //     callback(null, result);
    //   } else {
    //     callback("Failed to find planets", undefined);
    //   }
    // });
  };

module.exports.login = async function (userID, password, callback) {
    id = parseInt(userID)
    pw = password

    valid = await col.find({employee_id: id}).toArray()
    if (valid == ''){
        console.log("invalid userID, enter correct one or register if first time")
        //invalid userID, enter correct one
    }else{
        console.log(id)
        validpw = await col.find({employee_id: id}, {_id: 0, password: 1}).toArray();
        console.log(validpw)
    }

    // console.log(await col.find().toArray())

    // await col.find().toArray(async(err, result) => {
    //     console.log("a")
    //   if (!err) {
    //     callback(null, result);
    //   } else {
    //     callback("Failed to find planets", undefined);
    //   }
    // });
  };

// module.exports.findAllPlanets = async function (callback) {
//   var col = dbPool.collection("planets");
//   col.find().toArray(async(err, planets) => {
//     if (!err) {
//       callback(null, planets);
//     } else {
//       callback("Failed to find planets", undefined);
//     }
//   });
// };

// module.exports.findAllFilms = async function (callback) {
//   var col = dbPool.collection("films");
//   col.find().toArray(async(err, films) => {
//     if (!err) {
//       callback(null, films);
//     } else {
//       callback("Failed to find films", undefined);
//     }
//   });
// };

// // retrieve single character
// module.exports.findCharacter = async function (id, callback) {
//   var col = dbPool.collection("characters");
//   col.find({ id: +id }).toArray(async(err, character) => {
//     if (!err) {
//       callback(null, character[0]);
//     } else {
//       callback("Failed to find character", undefined);
//     }
//   });
// };

// // retrieve single film
// module.exports.findFilm = async function (id, callback) {
//   var col = dbPool.collection("films");
//   col.find({ id: +id }).toArray(async(err, film) => {
//     if (!err) {
//       callback(null, film[0]);
//     } else {
//       callback("Failed to find film", undefined);
//     }
//   });
// };

// // retrieve single planet
// module.exports.findPlanet = async function (id, callback) {
//   var col = dbPool.collection("planets");
//   col.find({ id: +id }).toArray(async(err, planet) => {
//     if (!err) {
//       callback(null, planet[0]);
//     } else {
//       callback("Failed to find planet", undefined);
//     }
//   });
// };

// module.exports.findCharactersByFilm = async function (id, callback) {
//   var col = dbPool.collection("films_characters");
//   col.find({ film_id: +id }).toArray(async (err, matches) => {
//     let characters = [];
//     for (let match of matches) {
//       let character_id = match.character_id;
//       var col = dbPool.collection("characters");
//       let data = await col.find({ id: +character_id }).toArray();
//       characters.push({ id: character_id, name: data[0].name });
//     }
//     if (!err) {
//       callback(null, characters);
//     } else {
//       callback("Failed to find characters", undefined);
//     }
//   });
// };

// module.exports.findPlanetsByFilm = async function (id, callback) {
//   var col = dbPool.collection("films_planets");
//   col.find({ film_id: +id }).toArray(async (err, matches) => {
//     let planets = [];
//     for (let match of matches) {
//       let planet_id = match.planet_id;
//       var col = dbPool.collection("planets");
//       let data = await col.find({ id: +planet_id }).toArray();
//       planets.push({ id: planet_id, name: data[0].name });
//     }
//     if (!err) {
//       callback(null, planets);
//     } else {
//       callback("Failed to find planets", undefined);
//     }
//   });
// };

// module.exports.findFilmsByCharacter = async function (id, callback) {
//   var col = dbPool.collection("films_characters");
//   col.find({ character_id: +id }).toArray(async (err, matches) => {
//     let films = [];
//     for (let match of matches) {
//       let film_id = match.film_id;
//       var col = dbPool.collection("films");
//       let data = await col.find({ id: +film_id }).toArray();
//       films.push({ id: film_id, name: data[0].title });
//     }
//     if (!err) {
//       callback(null, films);
//     } else {
//       callback("Failed to find films", undefined);
//     }
//   });
// };

// module.exports.findFilmsByPlanet = async function (id, callback) {
//   var col = dbPool.collection("films_planets");
//   col.find({ planet_id: +id }).toArray(async (err, matches) => {
//     let films = [];
//     for (let match of matches) {
//       let film_id = match.film_id;
//       var col = dbPool.collection("films");
//       let data = await col.find({ id: +film_id }).toArray();
//       films.push({ id: film_id, title: data[0].title });
//     }
//     if (!err) {
//       callback(null, films);
//     } else {
//       callback("Failed to find character", undefined);
//     }
//   });
// };

// module.exports.findCharactersByPlanet = async function (id, callback) {
//   var col = dbPool.collection("characters");
//   col.find({ homeworld: +id }).toArray(async(err, characters) => {
//     characters = characters.map((character) => {
//       return { id: character.id, name: character.name };
//     });
//     if (!err) {
//       callback(null, characters);
//     } else {
//       callback("Failed to find character", undefined);
//     }
//   });
// };