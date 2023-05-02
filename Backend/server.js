const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./model/users");
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
//registern new user
app.post('/registers', async (req, res) => {
  try {
      const user= await User.create(req.body);
      res.status(200).json(user);

  } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message })

  }
  // console.log(req.body);
  // res.send(req.body);
})

//login user
app.post('/login', async (req, res) => {
  try {
      const user= await User.findOne(req.body).select("-password");
      if(user){
        res.status(200).json(user);
      }else{
        res.status(404).json({Error: 'User Not Found'});
      }

  } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message })

  }
  // //console.log(req.body);
  // res.send(req.body);
})

app.listen(5000, () => {
  console.log("server is running on port : 5000 ");
})
connectDB();