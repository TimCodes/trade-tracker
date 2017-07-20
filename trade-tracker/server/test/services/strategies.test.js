const assert = require('assert');
const app = require('../../src/app');

describe('\'strategies\' service', () => {
  it('registered the service', () => {
    const service = app.service('strategies');

    assert.ok(service, 'Registered the service');
  });
});
