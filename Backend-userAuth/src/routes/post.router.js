const express=require('express')
const postRouter=express.Router()
const controller=require('../controller/post.controller')
const middleware=require('../middleware/Auth')


postRouter.post('/post',middleware.userAuth,controller.Posts)

module.exports=postRouter