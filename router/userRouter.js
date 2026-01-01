const express = require('express');
const userModel = require('../models/userModel')
// const mongoose = require('mongoose')
const router = express.Router();
// mongoose.connect("mongodb://127.0.0.1:27017/scatch");

router.get('/',(req,res)=>{
    res.send('user')
})

router.post('/register',async (req,res)=>{
    let {fullname,email,password,contact} = req.body;
    let createdUser = await  userModel.create({
       fullname,
        email,
        password
        
    })
})

module.exports = router;