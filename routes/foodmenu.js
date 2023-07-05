const express = require('express')
const router = express.Router()
const Food = require('../model/Food')

// const Table = require('../model/Table')


router.get('/', async (req,res)=>{
    try{
        const food = await Food.find()
        res.json(food)
    }catch(err){
        res.status(400).send()
    }
})

router.post('/', async (req,res)=>{
    const food = new Food(req.body)

    try{
        const newFood = await food.save()
        res.json(newFood)
    }catch(err){
        res.status(400).send()
    }
})


// router.get('/:id', async (req,res)=>{
//     try{

//     }catch(err){

//     }
// })
// router.delete('/:id', async (req,res)=>{
//     try{

//     }catch(err){

//     }
// })
// router.post('/:id', async (req,res)=>{
//     try{
        
//     }catch(err){

//     }
// })

module.exports = router