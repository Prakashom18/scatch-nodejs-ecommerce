const express = require('express');
const { isLoggedin } = require('../middlewares/isLoggedin');
const router = express.Router();

router.get('/',(req,res)=>{
    let error = req.flash("error");
    res.render('index',{error})
    // res.render('home')
})

router.get('/shop',isLoggedin,(req,res)=>{
   let error = req.flash("error")
    res.render("home",{error});
}
)

module.exports = router;