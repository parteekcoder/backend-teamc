const mongoose=require('mongoose');

const NewsHighlight=new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    data:
    {
    type:[{title:{
        type:String,
        required:true
    },
    creation_time:{
        type:Date,
        default:Date.now()
    },
    update_time:{
        type:Date
    },
    expiry_time:{
        type:Date
    },
    link:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:false
    }}]}
});

module.exports=mongoose.model('NewsHighlight',NewsHighlight,'NewsHighlight');