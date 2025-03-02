const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cors =require('cors')
const port =process.env.PORT || 5555
const User= require('./models/schema')
const app=express()
app.use(cors())// anyone can use
app.use(express.json())

const db= async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("connected")
}
db()
app.get('/',async(req,res)=>{
    res.status(400).send(`hello world`)
})
app.post('/',async(req,res)=>{
    try{
    const {name,price}=req.body
const user = await User.create({name,price})
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