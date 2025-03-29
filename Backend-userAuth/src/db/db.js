const mongoose=require('mongoose')

const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/backend-userAuth')
    .then(()=>{
        console.log('connected to data base')
    })
    .catch((err)=>{
        console.error('Error:',err)
    })
}

module.exports=connectDB;
