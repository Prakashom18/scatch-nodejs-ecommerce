const express = require('express');
const { isLoggedin } = require('../middlewares/isLoggedin');
const router = express.Router();
const productModel = require('../models/productModel');
router.get('/',(req,res)=>{
    let error = req.flash("error");
    res.render('index',{error,loggedin : false})
    // res.render('home')
})

router.get('/shop',isLoggedin,async (req,res)=>{
//    let error = req.flash("error")
      let product = await productModel.find();
    res.render("home",{product});
}
)

router.get('/addtocart/:id',isLoggedin,async (req,res)=>{
   let user = await userModel.findOne({user : req.user.email});
   
})

router.get('/logout',isLoggedin, (req,res)=>{
    res.redirect('shop');
})

module.exports = router;