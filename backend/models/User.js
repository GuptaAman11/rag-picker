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
        require:true

    },
    verified: { type: Boolean, default: false },

})

const User = mongoose.model("User", userSchema);
 

module.exports = User;

