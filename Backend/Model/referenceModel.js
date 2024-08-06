const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReferenceSchema = new Schema({
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true 
    },
    week: {
      weekNumber: {
        type: Number
      },
      title: {
        type: String
      },
      materials: [{
        materialNumber: {
          type: Number
        },
        title: {
          type: String
        },
        description: {
          type: String
        },
        type: {
          type: String
        },
        url: {
          type: String
        }
      }]
    }
  })
  

const Reference = mongoose.model('Reference', ReferenceSchema);

module.exports = Reference;
