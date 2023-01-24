const fs = require('fs');
const express = require('express');
const router = express.Router();

const openapi = require('../openapi.json');

router.get('/', function(req, res, next) {
  res.format({
    json: function() {
      res.json(openapi);
    },
    html: function() {
      res.send(fs.readFileSync('openapi.html', 'utf-8'));
    }
  });
});

module.exports = router;