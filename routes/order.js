const express = require('express')
const router = express.Router()
const Order = require('../model/Order')


router.get('/', async (req,res)=>{
    try{
        const order = await Order.find()
        res.json(order)
    }catch(err){
        res.status(400).send()
    }
})
router.post('/', async (req,res)=>{
    const order = new Order(req.body)
    try{
        const newOrder = await order.save()
        res.json(newOrder)
    }catch(err){
        res.status(400).send()
    }
})
router.get('/:id', async (req,res)=>{
    try{
        const order = await Order.find({table:req.params.id})
        res.json(order)
    }catch(err){
        res.status(400).send()
    }
})
// router.post('/:id')
router.get('/delete/:id', async (req,res)=>{
    try{
        // await Order.findByIdAndRemove(req.params.id)
        await Order.findOneAndRemove(req.params.id)
        // res.redirect('back')
        res.status(200).send('Note Deleted')
    }catch(err){
        res.status(401).send()
    }
})



module.exports = router