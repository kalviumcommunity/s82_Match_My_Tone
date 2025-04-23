const mongoose=require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    shade: String,
    type: String,
    suitableForTones: [String]
});

module.exports= mongoose.model('Product', productSchema);