const app=require('./src/app')

const connectDB=require('./src/db/db')


connectDB();
app.listen(3000,()=>{
    console.log('port is runing on 3000')
})