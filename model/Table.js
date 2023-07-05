const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const tableSchema = new mongoose.Schema({
    table:{
        type:Number,
        requird:true
    },
    food:[
        {
            type: Schema.Types.ObjectId,
            ref:'Food'
        }
    ]
}
)



module.exports = mongoose.model('Table', tableSchema)
