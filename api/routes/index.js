const express = require('express');
const router = express.Router();

const openapi = require('../openapi.json');

router.get('/', function(req, res, next) {
  res.json(openapi);
});

module.exports = router;