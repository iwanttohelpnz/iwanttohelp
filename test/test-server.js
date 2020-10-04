const app = require('../src/app')
const logger = require('../src/util/logger')

const port = process.env.PORT || 3100

app.listen(port, () => {
    logger.info('Test server is up on port ' + port)
})

module.exports = app