const Post=require('../models/Post.model')
const Like=require("../models/Like.model")

exports.createLike=async(req,res)=>{
    try {
        const{body,post}=req.body
        const savedLike=await Like.create({post,body})
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}}
            ,{new:true} // returns updated document
        )
        .populate("likes")// add comment to post
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

exports.UnlikePosts=async(req,res)=>{
    try {

        const{body,post}=req.body
    const deletelike=await Like.findOneAndDelete({post:post,_id:like});

    const updatedPost=await Post.findByIdAndDelete(post,{$pull:{likes:deletelike._id}},{new:true})
    res.json({
        post:updatedPost
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