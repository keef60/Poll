var createError = require('http-errors');
var express = require('express');

var cookieParser = require('cookie-parser');




var indexRouter = require('./routes/index'),
testRouter = require('./routes/testRouter'),
usersRouter = require('./routes/users');

var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test',testRouter)



module.exports = app;
