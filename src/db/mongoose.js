const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL
console.log(connectionURL)
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})