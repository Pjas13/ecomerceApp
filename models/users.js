const mongoose = require("mongoose");
const passport = require("passport-local-mongoose")

const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    isAdmin:{
        type: Boolean,
    },
})

module.exports = mongoose.model("User", UserSchema);