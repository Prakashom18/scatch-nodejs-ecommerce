const express = require('express');
const router = express.Router();
const ownerModel = require('../models/ownerModel')

router.get("/",function(req,res){
    res.send("hey");
})

module.exports = router;