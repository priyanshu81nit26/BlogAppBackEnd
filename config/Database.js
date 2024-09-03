const mongoose = require('mongoose')

// server creation:

const connectMongodb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { // Added return statement
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log(`Connection was successful`)
    })
    .catch((err) => {
        console.log("Error", err)
        console.error(err.message) 
        process.exit(1)
    })
}

module.exports = connectMongodb 
