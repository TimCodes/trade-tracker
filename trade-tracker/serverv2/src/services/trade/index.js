'use strict';

const service = require('feathers-mongoose');
const trade = require('./trade-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: trade,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/trades', service(options));

  // Get our initialize service to that we can bind hooks
  const tradeService = app.service('/trades');

  // Set up our before hooks
  tradeService.before(hooks.before);

  // Set up our after hooks
  tradeService.after(hooks.after);
};
