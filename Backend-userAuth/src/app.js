const express=require('express')
const app=express();
const userRoute=require('./routes/user.router')
const postRouter=require('./routes/post.router')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',userRoute)
app.use('/feed',postRouter)





module.exports=app;
