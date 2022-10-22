const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
   Name:String,
   Email:String,
   Password:String
})

const User = mongoose.model('users', userschema);
module.exports = User
