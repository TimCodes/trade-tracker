const trades = require('./trades');
const qualifiers = require('./qualifiers');
const strategies = require('./strategies/strategies.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(strategies);
  app.configure(qualifiers);
  app.configure(trades);
  app.configure(trades);
};
