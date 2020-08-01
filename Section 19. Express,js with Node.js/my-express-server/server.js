//jshint esversion:6

const express = require("express");
const app = express();


// get: when a browser gets in touch with server. 
app.get("/", function(request, response){   // homepage request
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(request, response){  // contact page request
    response.send("Contact me at: achambers1541@gmail.com");
});

app.get("/about", function(request, response){  // about page request
    response.send("My name is Adrian Chambers and I am a computer science student.");
});

app.get("/hobbies", function(requestion, response){
    response.send("<ul><li>Piano</li><li>Web Development</li><li>Swimming</li><li>Gaming</li></ul>")
})

// server listens to http requests on port 3000
app.listen(3000, function(){    
    console.log("Server has started on port 3000");
});   

