const mongoose=require('mongoose')
const adminSchema = new mongoose.Schema({
    email: String,
    role: String,
    permissions: [String]
});

module.exports = mongoose.model('Admin', adminSchema);