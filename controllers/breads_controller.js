const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads')

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

module.exports = breads