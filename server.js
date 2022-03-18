const express = require('express')
const methodOverride = require('method-override') //Dependencies
const mongoose = require('mongoose')


// Config 

require('dotenv').config()
const PORT = process.env.PORT
const app = express()


//Mongoose connector to mongoDB URI
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log(`connected to mongo: ${process.env.MONGO_URI}`)})



// MIDDLEWARE
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

//routes

app.get('/', (req, res) => {
    res.send('Welcome to the breads app!!')
})

//breads route 

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
  })

//Listen

app.listen(PORT, () => {
    console.log(`nomming at port ${PORT}`)
})