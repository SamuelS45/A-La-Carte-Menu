const mongoose = require('mongoose')




const orderSchema = new mongoose.Schema({
    table:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
        
    },
    img:{
        type:String,
        required:true
        
    },
    price:{
        type:String,
        required:true

    }
})


module.exports = mongoose.model('Order', orderSchema)