const express = require('express')
const router = express.Router()
const Producto = require('../models/Producto')
<<<<<<< HEAD

//crear productos
router.get('/new/:tiendaId', (req, res, next) => {
  tiendaId = req.params
=======
const Tiendita = require('../models/Tiendita')


//create Products
router.get('/new/:tiendaId',(req, res, next)=>{
  const {tiendaId} = req.params
>>>>>>> upstream/master
  const action = `/productos/new/${tiendaId}`
  res.render('productos/form',{action})
})

<<<<<<< HEAD
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

=======
router.post('/new/:tiendaId',(req, res, next)=>{
  const {tiendaId} = req.params
  req.body['storeID'] = tiendaId
  Producto.create(req.body)
    .then(producto=>{
      Tiendita.findByIdAndUpdate(tiendaId,{$push:{products:producto._id}})
        .then(tiendita=>{
          res.redirect(`/productos/detail/${producto._id}`)
        }).catch(e=>next(e))     
    }).catch(error=>{
      res.render('productos/form',{error,producto:req.body})
    })
})

//product detail
router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Producto.findById(id).populate('storeID')
    .then(producto=>{
      console.log(producto)
      res.render('productos/detail',producto)
    }).catch(e=>next(e))
})


>>>>>>> upstream/master
module.exports = router