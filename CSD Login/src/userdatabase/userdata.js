const mongoose = require('mongoose');

const users_schema1 = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const users_collection1 = new mongoose.model('users_collection1',users_schema1)
module.exports = users_collection1;