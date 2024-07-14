const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true

    },
    email: {
        type: String,
        unique: true,
        index : '1'
    },
    password: {
        type: String,
        require:true
    },
    location: {
        type: String,

    },
    image: {
        type: String,

    },
    mobile: {
        type: String,

    },
    verified: { type: Boolean, default: false },

    typeOfUser : {
        type : String ,
        enum : [ "user" , "rag"],
        require : true,
        },

})

const User = mongoose.model("User", userSchema);
 

module.exports = User;

