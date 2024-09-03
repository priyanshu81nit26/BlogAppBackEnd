// import :
const mongoose = require("mongoose");

// definining schema:

const Postschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type:String,
    required:true
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// export :
const Post = mongoose.model("Post", Postschema);
module.exports=Post
