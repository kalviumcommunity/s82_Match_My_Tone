const mongoose=require('mongoose');
const db=async()=>{
    try{
       await mongoose.connect(process.env.MONGO)
        console.log("Mongodb connected")

    }
    catch(e){
        console.log(e)
    }
}
module.exports=db