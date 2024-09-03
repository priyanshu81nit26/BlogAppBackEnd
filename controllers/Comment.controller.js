const Comment=require("../models/Comment.model")
const Post=require("../models/Post.model")


// logic :
exports.createComment=async(req,res)=>{
try {

    // fetch data ;
    const {post,user,body}=req.body
    // craeting object :
    const comment=new Comment({
        post,user,body
    })
    // saving into the database:
    const savedComment=await comment.save()

    // now we want to store this comment in post ccomment collection as well:
    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}}
        ,{new:true} // returns updated document
    )
    .populate("comments")// add comment to post
    .exec()

    res.status(200).json({
        post:updatedPost
    })
    
} catch (error) {
    console.error(error)
    console.log(error)
    res.status(500).json({
        success:false,
        message:"internal error"
        
    })
}
}