const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true}
})
module.exports = new mongoose.model('User',userSchema)