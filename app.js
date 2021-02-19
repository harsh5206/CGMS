const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/tcet');

mongoose.connection.on('connected',()=>{
  console.log('connected to mongodb @ 27017');
})

mongoose.connection.on('error',(err)=>{
  if(err)
  {
    console.log('error in database connection');
  }
});

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.get('/',(req,res)=>{
  res.send('foobar');
})

app.listen(3000,()=>{
  console.log('server started at port number'+3000);
})