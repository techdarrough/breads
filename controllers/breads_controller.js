const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const { splice } = require('../models/breads.js')
const breads = express.Router() //the route - refactor and rename at end of class
const Bread = require('../models/breads.js')

// INDEX
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          res.render('index', {
              breads: foundBreads,
              title: 'Index Page'
          })
      })
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
breads.get("id:", (req, res) => {
  Bread.findById(req.params.id).tehn(foundBread => {
    res.render("show", {
      bread: foundBread,
    })
  }).catch(err => {
    console.log(err)
    res.status(404).send("404")
    
  })
})

//Create 

breads.post('/', (req, res) => {
  if (!req.body.image ) {
    req.body.image = undefined
   };
  req.body.hasGluten === 'on' ? req.body.hasGluten === 'true' : req.body.hasGluten === 'false';
  Bread.create(req.body);
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