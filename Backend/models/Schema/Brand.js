const mongoose=require('mongoose')
const brandSchema = new mongoose.Schema({
    name: String,
    certifications: [String],
    crueltyFree: Boolean,
    vegan: Boolean
});

const Brand = mongoose.model('Brand', brandSchema);