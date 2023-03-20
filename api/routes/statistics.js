const Router = require('express-promise-router');
const createError = require('http-errors');
const statistics = require('../lib/statistics');

const router = new Router();

router.get('/:statisticsType', async (req, res, next) => {
  try {
    const output = await statistics.get(req.params.statisticsType);
    if (output) {
      res.json(output);
    } else {
      next(createError(404, {
        details: `Resource ${req.originalUrl} not found`,
        instance: req.originalUrl
      }));
    }
  } catch (err) {
    next(createError(500, {
      details: `Error fetching ${req.originalUrl}`,
      instance: req.originalUrl
    }));
  }
});

module.exports = router;