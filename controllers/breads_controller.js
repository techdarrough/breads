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
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id) 
    .then(foundBread => { 
      res.render('edit', {
        bread: foundBread 
      })
    })
})

// SHOW
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id).then(foundBread => {
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

breads.delete("/:id", (req, res) => {
  Bread.findByIdAndDelete(req.params.id).then((deleteBreads) => {
    res.status(303).redirect("/breads");
  });
});

// UPDATE
breads.put("/:id", (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((updatedBread) =>{
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  })  
})

module.exports = breads