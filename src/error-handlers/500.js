'use strict';

function serverError(err, req, res, next) {
  res.status(500).send('500 server error', err);
}

module.exports = serverError;