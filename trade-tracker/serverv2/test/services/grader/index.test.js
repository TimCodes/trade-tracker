'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('grader service', function() {
  it('registered the graders service', () => {
    assert.ok(app.service('graders'));
  });
});
