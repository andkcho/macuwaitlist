var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var BranchSchema = new Schema({
    name: String,
    address: String,
    city: String,
    zip: String
});

// This creates our model from the above schema, using mongoose's model method
var Branch = mongoose.model("Branch", BranchSchema);

// Export the Branch model
module.exports = Branch;

