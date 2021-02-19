const mongoose = require('mongoose');

const ComplaintSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  rollno:{
    type: String,
    required: true
  },
  branch:{
    type: String,
    required: true
  },
  division:{
    type: String,
    required: true
  },
  complaint_type:{
    type: String,
    required: true
  },
  complaint_desc:{
    type: String,
    required: true
  }
});

const Complaint = module.exports = mongoose.model('Complaint',ComplaintSchema);