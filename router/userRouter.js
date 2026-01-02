const express = require('express');
const userModel = require('../models/userModel')
const router = express.Router();
const bcrypt = require('bcrypt')

router.get('/',(req,res)=>{
    res.send('user')
})

router.post('/register', async (req,res)=>{
    try{
    let { fullname, email, password } = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,(err,hash)=>{
            if (err) return res.send(err.message)
            else  { res.send(hash);
            }
        })
    })
        
    

    // let createdUser = await  userModel.create({
    //    fullname,
    //     email,
    //     password
        
    // })
    //  res.send(createdUser)
    }
    catch(err){
        console.log(err.message);
    }
   
   
})

module.exports = router;