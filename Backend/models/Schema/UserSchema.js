const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, unique: true },
    password: String,
    skinType: String,
    skinTone: String
});

module.exports= mongoose.model('User', userSchema);