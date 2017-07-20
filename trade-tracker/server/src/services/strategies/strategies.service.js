// Initializes the `strategies` service on path `/strategies`
const createService = require('feathers-memory');
const hooks = require('./strategies.hooks');
const filters = require('./strategies.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'strategies',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/strategies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('strategies');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
