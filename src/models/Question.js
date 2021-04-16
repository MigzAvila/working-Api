const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    response_code: Number,
    question: String,
    results: [],

})

module.exports = mongoose.model('Question', QuestionSchema)
