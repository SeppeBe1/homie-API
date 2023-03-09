var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var userRouter = require('./routes/api/v1/users');
var houseRouter = require('./routes/api/v1/house');
var beHomieRouter = require('./routes/api/v1/beHomie');
var eventRouter = require('./routes/api/v1/anouncements/eventActivity');
var taskRouter = require('./routes/api/v1/anouncements/task');
var normalAnouncementRouter = require('./routes/api/v1/anouncements/normalAnouncement');

const mongoose = require('mongoose');
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

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/house', houseRouter);
app.use('/api/v1/behomie', beHomieRouter);
app.use('/api/v1/anouncements/event', eventRouter);
app.use('/api/v1/anouncements/task', taskRouter);
app.use('/api/v1/anouncements/normalAnouncement', normalAnouncementRouter);

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
  res.render('error');
});

module.exports = app;
