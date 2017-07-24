'use strict';

const service = require('feathers-mongoose');
const qualifiers = require('./qualifiers-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: qualifiers,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/qualifiers', service(options));

  // Get our initialize service to that we can bind hooks
  const qualifiersService = app.service('/qualifiers');

  // Set up our before hooks
  qualifiersService.before(hooks.before);

  // Set up our after hooks
  qualifiersService.after(hooks.after);
};
