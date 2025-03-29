const express=require('express')
const { Register, Login, Profile } = require('../controller/user.controller')
const router=express.Router()
const AuthMiddleware=require('../middleware/Auth')


router.post('/register',Register)
router.post('/login',Login)
router.post('/profile',AuthMiddleware.userAuth,Profile)


module.exports=router