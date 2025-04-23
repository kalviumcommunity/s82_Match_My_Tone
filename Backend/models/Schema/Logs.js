const mongoose=require('mongoose')
const logsSchema = new mongoose.Schema({
    action: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now },
    details: String
});

module.exports= mongoose.model('Logs', logsSchema);