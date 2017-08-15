'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('trade service', function() {
  it('registered the trades service', () => {
    assert.ok(app.service('trades'));
  });
});
