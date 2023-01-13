const mongoose = require('mongoose');
const acadmicCordinator= new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    data:
    {
    type:[{name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    insta:{
        type:String
    },
    linkedin:{
        type:String
    }}]
    }
})

module.exports= mongoose.model('AcadmicCordinator',acadmicCordinator,'AcadmicCordinator');