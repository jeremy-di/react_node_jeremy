const mongoose = require('mongoose')

const shipSchema = mongoose.Schema({
    name : {type : String, required : true},
    shipCode : {type : String, required : true},
    type : {type : String, required : true},
    colony : {type : String, required : true},
    commander : {type : String, required : true},
    description : {type : String, required : true}
})

module.exports = mongoose.model('ship', shipSchema)