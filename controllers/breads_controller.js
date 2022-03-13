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

breads.get('/new', (req, res) => {
  res.render('new')
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
  if (!req.body.image ) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
   };
  req.body.hasGluten === 'on' ? req.body.hasGluten === 'true' : req.body.hasGluten === 'false';
  Bread.push(req.body);
  res.redirect('/breads');
})

module.exports = breads