const express = require("express");
const api = require('./api')

const app = express();
const PORT = process.env.PORT || 8081;

app.use('/api', api)

app.listen(PORT, (err) => {
    if (err) {
        return console.log('ERROR', err)
    }
    console.log(`Listening on port ${PORT}`)
})