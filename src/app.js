const express = require('express');
const path = require('path');
const hbs = require('hbs');

const charitiesRouter = require('./routers/charities');
const indexRouter = require('./routers/index');
const searchRouter = require('./routers/search');
const notFoundRouter = require('./routers/not-found');

//Define paths to express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../public/templates/views');
const partialsPath = path.join(__dirname, '../public/templates/partials');

const app = express();
app.disable('etag');

//Setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirPath));
app.use(express.json());

//Routers
app.use(indexRouter)
app.use('/charities', charitiesRouter);
app.use('/search', searchRouter);
app.use("*", notFoundRouter);

module.exports = app;