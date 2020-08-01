// jshint esversion:6

// required packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');   // "assert" has to do with testing

// connection url
const url = 'mongodb://localhost:27017';

// database name
const dbName = 'fruitsDB';

// create a new mongoclient
const client = new MongoClient(url, { useUnifiedTopology: true });

// use connect method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

/*    insertDocuments(db, function(){
        client.close();
    });
*/

    findDocuments(db, function(){
        client.close();
    });

});

// insert 
const insertDocuments = function(db, callback){
    // get the document
    const collection = db.collection('fruits');
    // insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff!"
        }
    ], function(err, result){
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collect");
        callback(result);
    });
}

const findDocuments = function(db, callback){
    // get collection
    const collection = db.collection('fruits');
    // find some documents
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
}