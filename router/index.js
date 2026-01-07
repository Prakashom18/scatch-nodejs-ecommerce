const express = require('express');
const { isLoggedin } = require('../middlewares/isLoggedin');
const router = express.Router();
const productModel = require('../models/productModel');
router.get('/',(req,res)=>{
    let error = req.flash("error");
    res.render('index',{error})
    // res.render('home')
})

router.get('/shop',isLoggedin,async (req,res)=>{
//    let error = req.flash("error")
      let product = await productModel.find();
    res.render("home",{product});
}
)

module.exports = router;