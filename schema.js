const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
})
module.exports = new mongoose.model('User',userSchema)