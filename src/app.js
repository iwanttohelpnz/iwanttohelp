const express = require('express')
const path = require('path')
const hbs = require('hbs')

const charityRouter = require('./routers/charity')
const indexRouter = require('./routers/index')

//Define paths to express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../public/templates/views')
const partialsPath = path.join(__dirname, '../public/templates/partials')

const app = express()

//Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirPath))
app.use(express.json())

//Routers
app.use(charityRouter)
app.use(indexRouter)

module.exports = app