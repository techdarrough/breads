const express = require('express')



// Config 

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const path = require('path')
console.log(PORT)

// MIDDLEWARE

app.set('views',__dirname + '/views')
// app.set('views', __dirname);
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// MIDDLEWARE
app.use(express.static('public'))

//routes

app.get('/', (req, res) => {
    res.send('Welcome to the breads app!!')
})

//breads route 

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

//Listen

app.listen(PORT, () => {
    console.log(`nomming at port ${PORT}`)
})