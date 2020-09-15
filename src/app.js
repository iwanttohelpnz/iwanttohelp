const express = require('express')
const charityRouter = require('./routers/charity')

const app = express()

app.use(express.json())
app.use(charityRouter)

module.exports = app