const mongoose = require('mongoose');
const notesschema = new mongoose.Schema({
   Title:String,
   Name:String,
   Note:String,
   Userid:String
})

const Notes = mongoose.model('notes', notesschema);
module.exports = Notes
