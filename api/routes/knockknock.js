const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.get('/', function(req, res, next) {
  try {
    res.json({
      response: 'Who is there?'
    });
  } catch (err) {
    next(createError(500, {
      details: `Error fetching ${req.originalUrl}`,
      instance: req.originalUrl
    }));
  }
});

module.exports = router;