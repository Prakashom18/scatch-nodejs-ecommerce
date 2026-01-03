const express = require('express');
const { isLoggedin } = require('../middlewares/isLoggedin');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/shop',isLoggedin,(req,res)=>{
    res.send("Shop");
}
)

module.exports = router;