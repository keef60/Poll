const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

const indexRouter = require('./routes/index'),
testRouter = require('./routes/testRouter'),
usersRouter = require('./routes/users');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




app.use('/', indexRouter);
app.use('https://poll-project-22167.web.app/users', usersRouter);
app.use('https://us-central1-poll-project-22167.cloudfunctions.net/app/orders/Customers',testRouter)
app.use('https://us-central1-poll-project-22167.cloudfunctions.net/app/customer/Messages',testRouter)


exports.app = functions.https.onRequest(app);