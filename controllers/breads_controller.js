const express = require('express')
const req = require('express/lib/request')
const { splice } = require('../models/breads')
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

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      idx: req.params.arrayIndex,
    })
  } else {
    res.status(404).send('404')
  }
})

//Create 

breads.post('/', (req, res) => {
  if (!req.body.image ) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
   };
  req.body.hasGluten === 'on' ? req.body.hasGluten === 'true' : req.body.hasGluten === 'false';
  Bread.push(req.body);
  res.redirect('/breads');
})

//Delete 

breads.delete('/:arrayIndex', (req, res) => {
  Bread.splice(req.params.arrayIndex, 1);
  res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

module.exports = breads