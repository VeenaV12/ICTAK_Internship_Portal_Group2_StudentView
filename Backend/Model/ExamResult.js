const mongoose = require('mongoose');

const ExamResultSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  score: { type: Number, required: true },
});

module.exports = mongoose.model('ExamResult', ExamResultSchema);
