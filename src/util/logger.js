const { createLogger, format, transports } = require('winston')

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`
        })
    ),
    transports: [new transports.Console()]
});

module.exports = logger
