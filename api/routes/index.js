const fs = require('fs');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.get('/', function(req, res, next) {
  try {
    const openapi = require('../openapi.json');
    res.format({
      json: function() {
        res.json(openapi);
      },
      html: function() {
        res.send(fs.readFileSync('openapi.html', 'utf-8'));
      }
    });
  } catch (err) {
    next(createError(500, {
      details: `Error fetching ${req.originalUrl}`,
      instance: req.originalUrl
    }));
  }
});

module.exports = router;