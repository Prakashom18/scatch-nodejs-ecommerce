const express = require('express');
const { isLoggedin } = require('../middlewares/isLoggedin');
const router = express.Router();
const productModel = require('../models/productModel');
const userModel = require('../models/userModel')
router.get('/',(req,res)=>{
    let error = req.flash("error");
    res.render('index',{error,loggedin : false})
    // res.render('home')
})

router.get('/shop',isLoggedin,async (req,res)=>{
//    let error = req.flash("error")
      let product = await productModel.find();
      let success = req.flash("success");
    res.render("home",{product,success});
}
)

router.get('/cart',isLoggedin, async (req,res)=>{
    // let product = await productModel.find();
    let user = await userModel.findOne({email:req.user.email}).populate("cart")
    res.render('cart',{user});
    
})

router.get('/addtocart/:productid',isLoggedin,async (req,res)=>{
   let user = await userModel.findOne({email : req.user.email});
   user.cart.push(req.params.productid);
   await user.save();
   req.flash("success","Added to cart");
   res.redirect('/shop');
})



router.get('/logout',isLoggedin, (req,res)=>{
    res.redirect('shop');
})

module.exports = router;