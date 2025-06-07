const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    tipo: String,
    status: String,
    tags: [String],
    link: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Entry, entryShema')