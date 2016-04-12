"use strict";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Inicializamos los modelos de mongoose
// Se puede acceder a ellos mediante mongoose.model('<MODELO>')
require('./models/user_model');
require('./models/destination_model');
require('./models/country_model');
require('./models/hotel_model');
require('./models/restaurant_model');

// Requerimos las rutas
var index = require('./routes/api/v1/index');
var users = require('./routes/api/v1/users');
var destinations = require('./routes/api/v1/destinations');
var countries = require('./routes/api/v1/countries');
var hotels = require('./routes/api/v1/hotels');
var restaurants = require('./routes/api/v1/restaurants');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Hacemos que las rutas para los routers sean las especificadas
app.use('/api/v1/', index);
app.use('/api/v1/users', users);
app.use('/api/v1/destinations', destinations);
app.use('/api/v1/countries', countries);
app.use('/api/v1/hotels', hotels);
app.use('/api/v1/restaurants', restaurants);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
