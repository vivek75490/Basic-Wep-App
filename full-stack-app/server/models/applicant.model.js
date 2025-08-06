// server/models/applicant.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  interest: {
    type: String,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true,
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
