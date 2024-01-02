const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    firstName : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    createdAt : {type : String, default : Date.now}
})

module.exports = mongoose.model('user', userSchema)