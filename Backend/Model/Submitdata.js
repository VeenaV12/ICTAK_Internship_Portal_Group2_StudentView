const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmitdataSchema = new Schema({
  week_name: { type: String, required: true },
  submission_status: { type: String, required: true },
  grading_status: { type: String, required: true },
  online_text: { type: String, required: true },
  submission_comments: { type: String, required: true },
  grade: { type: String, required: true },
  graded_by: { type: String, required: true },
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  student: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Submitdata = mongoose.model('Submitdata', SubmitdataSchema);
module.exports = Submitdata;
