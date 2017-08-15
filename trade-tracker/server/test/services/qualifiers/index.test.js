'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('qualifiers service', function() {
  it('registered the qualifiers service', () => {
    assert.ok(app.service('qualifiers'));
  });
});
