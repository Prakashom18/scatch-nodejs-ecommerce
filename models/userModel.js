const  mongoose = require('mongoose');

mongoose.connect('mongodb//:127.0.0.1:27017/ScatchDb');

const userSchema = mongoose.Schema({
    fullname : String,
    emai : String,
    password : String,
    order : {
        type : Array,
        default : []
    },
    cart : {
        type : Array,
        default : []
    },    
    product : {
        type :  Array,
        default : []
    }




})