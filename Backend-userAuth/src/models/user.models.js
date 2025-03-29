const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
})

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;
