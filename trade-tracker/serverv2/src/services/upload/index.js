'use strict';
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const hooks = require('./hooks');
const path = require("path")

const uPath = path.join(__dirname, "/../../uploads")



const blobStorage = fs(uPath);
const myBService = blobService({Model: blobStorage})


console.log(uPath)
class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return Promise.resolve([]);
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {
  // console.log(data, params)
    if(data.uri){
      myBService.create(data)
      .then(console.log)
      .catch(console.log)
    }
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
  app.use('/uploads', new Service());

  // Get our initialize service to that we can bind hooks
  const uploadService = app.service('/uploads');

  // Set up our before hooks
  uploadService.before(hooks.before);

  // Set up our after hooks
  uploadService.after(hooks.after);
};

module.exports.Service = Service;
