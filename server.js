const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const menu = require('./routes/foodmenu')
const table = require('./routes/table')
const order = require('./routes/order')
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let db = mongoose.connection
db.on('error', (err)=>{console.log('Error DB not connected')})
db.once('open', ()=>{console.log('db connected...')})

app.use('/menu', menu)
app.use('/table',table)
app.use('/order',order)

app.get('/data', (req, res)=>{
    res.send('hello world node')
})



app.listen(port, ()=>{
    console.log(`App running on ${port}`);
})