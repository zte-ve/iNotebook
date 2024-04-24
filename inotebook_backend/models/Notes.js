const mongoose = require("mongoose");

// console.log("we're gonna create our notes schema!");
const NotesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {  // tags will tell what type of note this is; customized tags; defult value general if not provided
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports=new mongoose.model("notes",NotesSchema);