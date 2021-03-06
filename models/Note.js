var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var NoteSchema = new Schema({
  title: {
      Type: String
    },
  body: {
      type: String
    }
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
