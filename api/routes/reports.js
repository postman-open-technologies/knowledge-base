const express = require('express');
const Router = require('express-promise-router');
const createError = require('http-errors');
const reports = require('../lib/reports');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(await reports.all());
  } catch (err) {
    next(createError(500, {
      details: `Error fetching ${req.originalUrl}`,
      instance: req.originalUrl
    }));
  }
});

router.get('/:reportId', async (req, res, next) => {
  try {
    const output = await reports.get(req.params.reportId);
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