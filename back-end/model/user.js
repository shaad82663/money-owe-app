const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userId : {
      type : Number,
      required :true
    },
    owes : [
        {
            userId : {
                type : Number
            },
            amount : {
                type : Number,
                default : 0.0
            }
        }
    ]
})

// userSchema.methods.check = function(type, amount) {

// }


module.exports = mongoose.model('User', userSchema);