const mongoose=require('mongoose')
const skinProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    skinTone: String,
    skinType: String,
    imageUrl: String,
    analysisDate: Date
});

module.exports= mongoose.model('SkinProfile', skinProfileSchema);
