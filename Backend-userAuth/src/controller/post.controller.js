const userModel = require("../models/user.models")
const postModel=require('../models/post.models')

module.exports.Posts=async (req,res)=>{
    const {email}=req.user
    try{
        let user= await userModel.findOne({email})
        const {content}=req.body
        let post =await postModel.create({
            user:user.id,
            content
        })
        user.posts.push(post.id)
        await user.save()
        return res.status(200).json("post created")
        res.redirect('/profile')
    }catch(err){
        console.error('Error',err)
    }
}


 