'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('trades service', function() {
  it('registered the trades service', () => {
    assert.ok(app.service('trades'));
  });
});
