const app = require('./app')
const logger = require('./util/logger')

const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.info('Server is up on port ' + port)
})

module.exports = app