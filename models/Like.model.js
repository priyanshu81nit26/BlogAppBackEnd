const mongoose=require('mongoose')

// defining schema :
const LikeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
    ,user:{
        type:String,
        required:true
    }
})

//export :
const Like=mongoose.model("Like",LikeSchema)
module.exports=Like