const express = require('express');
const userModel = require('../models/userModel')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/',(req,res)=>{
    res.send('user')
})

router.post('/register', async (req,res)=>{
    try{
    let { fullname, email, password } = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            if (err) return res.send(err.message)
            else  { 
               let user = await  userModel.create({
               fullname,
                email,
                password :hash
                
            })
            let token = jwt.sign({email,id:user._id},"secretkey")
            res.cookie("token",token);
             res.send(token);
            }
        })
    })
        
    

    
    }
    catch(err){
        console.log(err.message);
    }
   
   
})

module.exports = router;