const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    department:{
        type:String,
        required:true
    },
    data:{type:[{title: {type:String, required:true},
    photo: {type:String, required:true},
    creation_time: {type:Date, default:Date.now},
    update_time: {type:Date, default:Date.now},
    is_active: {type:Boolean,default:"true"}}]}
});

module.exports =  mongoose.model('achievements', achievementSchema, 'achievements');