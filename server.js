//required dependencies for node.js
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set the port that the program will operate on.
var PORT = process.env.PORT || 3000;

//notify node to use an "express" server - 
//this is part of the express requirement above.
var app = express();

//tell express to handle the parsing of the data being used.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router mapping file points.
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//initialize the server to the set port.
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});