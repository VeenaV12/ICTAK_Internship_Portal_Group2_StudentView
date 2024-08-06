const mongoose = require('mongoose');

const WsubmitSchema = new mongoose.Schema({
    week_name: {
        type: String,
        required: true
    },
    submission_status: {
        type: String,
        required: true
    },
    grading_status: {
        type: String,
        required: true
    },
    online_text: {
        type: String,
        required: true
    },
    submission_comments: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    graded_by: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    project2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    project3: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true}
    // },
    // student: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'student',
    //     required: true
    // }
}, {
    timestamps: true
});

const Wsubmitdata = mongoose.model('Wsubmitdata', WsubmitSchema);

module.exports = Wsubmitdata;