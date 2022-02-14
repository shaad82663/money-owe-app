const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/payment", { 
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(con => {
        console.log(`Connected to DB with host:${con.connection.host}`)
    })
}


module.exports = connectDB;