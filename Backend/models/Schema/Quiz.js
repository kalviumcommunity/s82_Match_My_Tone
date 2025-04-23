const mongoose=require('mongoose')
const quizSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    questions: [String],
    result: String
});

module.exports= mongoose.model('Quiz', quizSchema);