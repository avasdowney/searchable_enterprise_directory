// mongodb client driver
const { MongoClient } = require('mongodb');

// DB Connection URL
var url = "mongodb://localhost:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "swapi";
var collectionName = "planets"

// connect to the db server
await client.connect();

// set the database to use
const db = client.db(dbName);
// set the collection to use
var collection = db.collection(collectionName);

//Validate that the user registering that user ID does not exist in the db already
module.exports.registerUser = async function call(dbName, userID, callback) {
    collectionName = "EmployeeDB";
    collection = db.collection(collectionName);
    const planet = await collection.findOne({userid: parameters});
    callback({ planet:planet });
}