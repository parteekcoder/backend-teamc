const mongoose=require('mongoose');

const Infrastructure=new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    data:{
        type:[{src:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        }}]
    }
})

module.exports=mongoose.model('Infrastructure',Infrastructure,'Infrastructure');