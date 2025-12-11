const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    message:String
},{timestamps:true})

module.exports = mongoose.model("User", UserSchema);