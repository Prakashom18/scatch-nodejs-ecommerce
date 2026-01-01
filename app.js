const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const ownerRouter = require('./router/ownerRouter')
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');
const index = require('./router/index');
const db = require('./config/mongoose-connection');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs');

app.use('/owner',ownerRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/',index)

// app.get('/',(req,res)=>{
//     res.render('index');
// })

// app.get()

app.listen(3000,(err)=>{
    console.log("Running on port 3000");
})