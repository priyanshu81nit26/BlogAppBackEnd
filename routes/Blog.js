const express=require('express')
const router=express.Router()

// import controller

const {createComment} =require("../controllers/Comment.controller")
const {getallPosts,createPost} =require("../controllers/Post.controller")
const { createLike,UnlikePosts } = require('../controllers/Like.controller')

// mapping controller
router.post("/comments/create",createComment)
router.post("/likes/create",createLike)
router.post("/likes/unlike",UnlikePosts)
router.get("/posts/create",createPost)
router.get("/posts",getallPosts)



// export 
module.exports=router

