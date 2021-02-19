const express = require('express');
const complaints = require('../models/complaints');
const router = express.Router();
const Complaint = require('../models/complaints');

router.get('/complaints',(req,res,next)=>{
  Complaint.find((err,complaints)=>{
    res.json(complaints);
  })
});

router.post('/complaint',(req,res,next)=>{
  let newComplaint = new Complaint({
    name: req.body.name,
    rollno: req.body.rollno,
    branch: req.body.branch,
    division: req.body.division,
    complaint_type: req.body.complaint_type,
    complaint_desc: req.body.complaint_desc
  });
  newComplaint.save((err,Complaint)=>{
    if(err)
    {
      res.json('msg: failed to add complaint');
    }
    else{
      res.json('msg: complaint added successfully');
    }
  })
});

router.delete('/complaint/:id',(req,res,next)=>{
  Complaint.remove({_id: req.params.id},(err,result)=>{
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  })
});




module.exports = router;