var express = require("express")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");

var PORT = 3000;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect('mongod://localhost/branchdb', {
    useMongoClient: true
});

//Routes
    //====================================
    require("./routes/html-routes.js")(app);
    require("./routes/branch-api-routes.js")(app);

    //Start Server
app.listen(PORT, function() {
    console.log("App running on PORT " + PORT + "!");
});
