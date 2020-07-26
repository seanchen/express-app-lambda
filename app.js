'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/index.html`)
})

// try to server a static text file.
app.get('/txt', (req, res) => {
        res.sendFile(`${__dirname}/index.txt`)
})

// app.listen(3000) // <-- comment this line out from your app
module.exports = app // export your app so aws-serverless-express can use it
