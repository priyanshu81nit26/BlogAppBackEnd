const Post=require('../models/Post.model')

exports.createPost=async()=>{
    try {
        const {title,body}=req.body
        const post=new Post({title,body})
        const savedPost=await post.save()

        res.json({
            post:savedPost
        })

    }catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error"
            
        })
    }
}

exports.getallPosts=async(req,res)=>{
    try {
    //    const posts=await Post.find() if we want get all posts with id of likes and comments in arrays:
       const posts=await Post.find().populate("likes").populate("comments").exec()// if we want comments and likes as well 
       res.json({
        posts
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