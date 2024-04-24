const mongoose = require("mongoose");

// console.log("we're gonna create our User schema!");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        // unique: true implemented through auth.js using findOne so that index is not created
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const User=mongoose.model("user",UserSchema);
module.exports=User;