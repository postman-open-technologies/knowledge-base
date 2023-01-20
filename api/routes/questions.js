const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const questions = require('../lib/questions');

router.get('/', function(req, res, next) {
  res.json(questions);
});

router.get('/:questionId', function(req, res, next) {
  const output = questions.find(question => question.id == req.params.questionId);
  if (output) {
    res.json(output);
  } else {
    next(createError(404, {
      details: `Resource ${req.originalUrl} not found`,
      instance: req.originalUrl
    }));
  }
});

module.exports = router;