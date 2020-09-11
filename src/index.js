const express = require('express')
const logger = require('./util/logger.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    logger.info('Server is up on port ' + port)
})