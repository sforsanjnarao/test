const jwt=require('jsonwebtoken')
const userModel = require("../models/user.models");
const bcrypt=require('bcrypt')

module.exports.Register=async (req,res)=>{
    const {username, email, password}=req.body;
    if(!username || !email || !password) return res.status(401).json('fill the form');

    try{
        const existUser= await userModel.findOne({email:email});
        if(existUser) return res.status(401).json('you are already registered');

        const hashPassword= await bcrypt.hash(password,10)
        const user=await userModel.create({
            username,
            email,
            password:hashPassword
        });

        const token= jwt.sign({_id:user._id},'sanjana');
        return res.status(200).json({user,token})
    }
    catch(err){
        console.error('Error:',err)
    }
}

module.exports.Login=async (req,res)=>{
    const {email, password}=req.body;
    if(!email || !password) return res.status(400).json('enter the val');

    const user=await userModel.findOne({email:email});
    if(!user) return req.status(400).json('register First');

    const match=await bcrypt.compare(password, user.password);
    if(!match) return res.status(400).json({message:'invalid password'});

    const token=await jwt.sign({_id:user._id},'sanjana');

        return res.status(200).json({ user: user,token, redirect:'/profile'})

}
module.exports.Profile=async (req,res)=>{
    res.send("its's profile page")
}
