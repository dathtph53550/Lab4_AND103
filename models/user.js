const mongoose = require('mongoose');
const Scheme = mongoose.Schema

const Users = new mongoose.Schema({
    username:{type: String,unique:true,maxLength:255},
    password:{type: String},
    email:{type: String,unique:true,},
    name:{type: String},
    avatar:{type: String},
    age:{type: Number,min:18,max:70},
    available:{type: Boolean,default:false}
},{
    timestamps: true
});
module.exports = mongoose.model('user',Users);
