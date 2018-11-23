const express = require('express')
const router = express.Router()
const Producto = require('../models/Producto')

//crear productos
router.get('/new/:tiendaId', (req, res, next) => {
  tiendaId = req.params
  const action = `/productos/new/${tiendaId}`
  res.render('productos/form',{action})
})

router.post('/new/:tiendaId', (req, res, next) => {
    const {
        tiendaId
    } = req.params
    /* req.body['storeId'] = tiendaId */
    Producto.create({
            storeId: tiendaId,
            ...req.body
        })
        .then(producto => {
          res.redirect(`/productos/details/${producto_id}`)
        }).catch(error => {
          res.render(`productos/form`, {error,producto:req.body})
        })
})

//product detail

router.get(`/detail/:id`,(req, res, next) =>{
const {id} = req.params
Producto.findById(id)
.then(producto =>{

})
})

module.exports = router