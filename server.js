const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cors =require('cors')
const port =process.env.PORT || 5555
const User= require('./schema')
const app=express()
app.use(cors())// anyone can use
app.use(express.json())

const db= async()=>{
    await mongoose.connect('mongodb+srv://shreemanvithajinnas82:root@cluster0.2hdes.mongodb.net/login?retryWrites=true&w=majority&appName=Cluster0')
    console.log("connected")
}
db()
app.get('/',async(req,res)=>{
    res.status(400).send(`hello world`)
})
app.post('/',async(req,res)=>{
    try{
    const {name,age}=req.body
const user = await User.create({name,age})
console.log(user)
res.send(user)
    }
    catch(e){
        console.log(e)
    }

})

app.listen(port,()=>{
    console.log(`server connected successfully at ${port}`)
})