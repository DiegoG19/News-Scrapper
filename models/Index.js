var mongoose = require("mongoose");


var Schema = mongoose.Schema;
// Create new schema
var NoteSchema = new Schema({
 
  title: String,
  
  body: String
});

//set it to Note
var Note = mongoose.model("Note", NoteSchema);

//Export Note
module.exports = Note;