const express = require('express')
const req = require('express/lib/request')
const breads = express.Router() //the route - refactor and rename at end of class
const Bread = require('../models/breads')

// INDEX
breads.get('/', (req, res) => {
    res.render('index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})

//create 

breads.post('/', (req, res) => {
  req.body.hasGluten === 'on' ? req.body.hasGluten === 'true' : req.body.hasGluten === 'false';
  Bread.push(req.body)
})

module.exports = breads