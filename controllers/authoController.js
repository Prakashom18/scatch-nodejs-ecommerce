const { generateToken } = require("../utils/generateToken");
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const {generateToken} = require('../utils/generateToken')

module.exports.registerUser = async (req,res)=>{
     try{
    let { fullname, email, password } = req.body;
    let user = await userModel.findOne({email:email});
    if(user) return res.status(401).send("You already have a account.Please login");

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            if (err) return res.send(err.message)
            else  { 
               let user = await  userModel.create({
               fullname,
                email,
                password :hash
                
            })
            let token = generateToken(user);
            res.cookie("token",token);
             res.send("user created successful");
            }
        })
    })
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports.loginUser = async (req,res)=>{
    let {password,email} = req.body;
    let user =await userModel.findOne({email:email});

    if(!user) return res.status(201).send("Email or password incorrect");

    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
         let token =  generateToken(user);
         res.cookie("token",token);
         res.send('Logged in');
        }
        else res.send('Email or password incorrect');
    })





}