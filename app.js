var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const config = require('config');
const passport = require('./passport/passport');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var userRouter = require('./routes/api/v1/users');
var houseRouter = require('./routes/api/v1/house');
var anouncementRouter = require('./routes/api/v1/anouncement');
var houseRuleRouter = require('./routes/api/v1/houseRules');

const mongoose = require('mongoose');
//online
// mongoose.connect(process.env.dboconn || config.get('Database.conn'));
//localhost
mongoose.connect('mongodb://127.0.0.1:27017/homie');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use(cors());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/house', houseRouter);
app.use('/api/v1/anouncement',anouncementRouter);
app.use('/api/v1/houserules',  passport.authenticate('jwt',{session:false}), houseRuleRouter);

// passport.authenticate('jwt', { session: false })


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log('werkt ni');
  res.render('error');
});

module.exports = app;
