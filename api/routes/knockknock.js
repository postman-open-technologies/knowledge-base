const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    response: 'Who is there?'
  });
});

module.exports = router;