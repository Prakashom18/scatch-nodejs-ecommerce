const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.send('dashboard');
})

// app.get()

app.listen(3000,(err)=>{
    console.log("Running on port 3000");
})