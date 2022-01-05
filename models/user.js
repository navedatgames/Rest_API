const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:String
})

const User = mongoose.model("User",UserSchema)

module.exports = User;