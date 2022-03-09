const express = require('express')

cconst express = require('express')

// Config 

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//routes

app.get('/', (req, res) => {
    res.send('Welcome to the breads app!!')
})


//Listen

app.listen(PORT, ())