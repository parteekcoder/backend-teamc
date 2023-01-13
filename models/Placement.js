const mongoose=require('mongoose');

const Placement=new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    data:{type:[{name:{
        type:String,
        required:true
    },
    imgurl:{
        type:String
    },
    Companyname:{
        type:String
    },
    packages:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }}]}
},{timestamps:true});

module.exports=mongoose.model('Placement',Placement,'Placement')