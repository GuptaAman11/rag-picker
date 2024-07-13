


const mongoose = require('mongoose')


const url = 'mongodb+srv://smartcity:smartcity@cluster0.s6xvr4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}