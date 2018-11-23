const express = require('express')
const router = express.Router()
const Tiendita = require('../models/Tiendita')

//create Tienditas
router.get('/new',(req, res)=>{
  res.render('tienditas/form')
})


//list tienditas

//Tienditas detail

//Update Tienditas

//delete Tienditas


module.exports = router