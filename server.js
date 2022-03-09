const express = require('express')



// Config 

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//routes

app.get('/', (req, res) => {
    res.send('Welcome to the breads app!!')
})

//breads route 

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

//Listen

app.listen(PORT, () => {
    console.log(`nomming at port ${PORT}`)
})