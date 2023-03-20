const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const knockknockRouter = require('./routes/knockknock');
const reportsRouter = require('./routes/reports');
const statisticsRouter = require('./routes/statistics');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/knockknock', knockknockRouter);
app.use('/reports', reportsRouter);
app.use('/statistics', statisticsRouter);

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
    instance: err.instance || req.originalUrl,
    type: `${baseURI}/${err.constructor.name}`
  });
});

module.exports = app;