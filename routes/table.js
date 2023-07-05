const express = require('express')
const router = express.Router()
const Table = require('../model/Table')


router.get('/', async (req,res)=>{
    try{
        const table = await Table.find()
        res.json(table)
    }
    catch(err){
        res.status(400).send()
    }

})
router.post('/', async (req,res)=>{
    const table = new Table(req.body)
    try{
        const newTable = await table.save()
        res.json(newTable)
        // res.status(201).send()
    }catch(err){
        res.status(400).send()
    }
})
router.get('/:id', async (req,res)=>{

})
router.post('/:id', async (req,res)=>{
    
})
router.delete('/:id')


module.exports = router