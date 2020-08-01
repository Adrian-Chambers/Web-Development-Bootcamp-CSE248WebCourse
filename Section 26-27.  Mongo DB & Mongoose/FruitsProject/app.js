// jshint esversion:6

// required packages
const mongoose = require('mongoose');

// connect to server. (Note: the {} is there because, when running app.js, console gives a depreciation warning)
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true , useUnifiedTopology: true } );


/* create  */
const fruitSchema = new mongoose.Schema({   // create fruit schema
    name: {
        type: String,
       required: [true, "Please check your data entry, no name specified!"],
    },
    rating:{
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);     // create a fruit collection. Note: mongoose automatically makes first string plural (so "Fruit" would become "Fruits")

/* insert */
const fruit = new Fruit({   // creates a new fruit object
    name: "Apple",
    rating: 10,
    review: "Pretty solid as a fruit."
});

 // fruit.save();   // save the fruit to the collection

 const kiwi = new Fruit({
     name: "Kiwi",
     rating: 10,
     review: "The best fruit!"
 });

 const orange = new Fruit({
     name: "Orange",
     rating: 4,
     review: "Too sour for me"
 });

 const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texture"
});

const peach = new Fruit({
    name: "Peach",
    rating: 8,
    review: "Sweet!"
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit!"
});

/*
Fruit.insertMany([kiwi, orange, banana, pineapple, peach], function(err){     // save multiple fruits to the collection
    if(err){
        console.log(err);
    } else{
        console.log("Successfully saved all fruits to fruitsDB");
    }
});     
*/

/* find */
Fruit.find(function(err, fruits){   // find all fruits
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();    // closes the connection

        fruits.forEach(function(fruit){
            console.log(fruit.name);    // prints the fruits name
        });
    }
});

/* update */
/*
Fruit.updateOne({_id: "5f24b527a0063c44c0dac64a"}, {name: "Peach"}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Successfully updated the document.");
    }
})
*/

/* delete */
Fruit.deleteOne({name: "Peach"}, function(err){
    if(err){
        console.loge(err);
    } else{
        console.log("Successfully deleted document");
    }
});



const personSchema = new mongoose.Schema({  // create a person schema
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,     // embeds a fruit document inside person object
});

const Person = mongoose.model("Person", personSchema);  // create person collection

const person = new Person({     // create person object
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

person.save();  // save person to collection

Person.deleteMany({name: "John"}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Delete success");
    }
});