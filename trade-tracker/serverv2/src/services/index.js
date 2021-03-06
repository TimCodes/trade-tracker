'use strict';
const upload = require('./upload');
const grader = require('./grader');
const test = require('./test');
const trade = require('./trade');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(trade);
  app.configure(test);
  app.configure(grader);
  app.configure(upload);
};
