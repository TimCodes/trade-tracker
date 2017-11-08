'use strict';

const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return Promise.resolve([]);
  }

  get(id, params) {
    console.log('fucker ', id, params)
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
    console.log("get shit mofo ")
  }

  create(data, params) {
    console.log(data, params)
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/graders', new Service());

  // Get our initialize service to that we can bind hooks
  const graderService = app.service('/graders');

  // Set up our before hooks
  graderService.before(hooks.before);

  // Set up our after hooks
  graderService.after(hooks.after);
};

module.exports.Service = Service;
