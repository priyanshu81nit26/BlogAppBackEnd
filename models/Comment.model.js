const mongoose = require('mongoose')

// defining schema :

const CommentSchema = new mongoose.Schema({ 
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // reference to post model:
    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true }) // Added timestamps option

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment