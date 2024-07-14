const express = require('express')
const app = express()
const { Connection } = require('./db')
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/book')
const cors = require('cors')




app.listen(8000, () => {
    console.log("server started")
})
app.use(express.json())
app.use(cors())

Connection()


app.use('/api/v1/users', userRoutes);
app.use('/api/v1/users', bookRoutes);
