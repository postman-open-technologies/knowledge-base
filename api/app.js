const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const knockknockRouter = require('./routes/knockknock');
const questionsRouter = require('./routes/questions');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/knockknock', knockknockRouter);
app.use('/questions', questionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, {
    details: `Resource ${req.originalUrl} not found`,
    instance: req.originalUrl
  }));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const baseURI = req.protocol + '://' + req.get('host');

  res.set('Content-Type', 'application/problem+json');
  res.status(err.status || 500).json({
    status: err.status,
    title: err.message,
    details: err.details,
    instance: err.instance,
    type: `${baseURI}/${err.constructor.name}`
  });
});

module.exports = app;