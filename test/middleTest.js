const assert = require('chai').assert;
const middle = require('../middle');

describe('#Middle', () => {

  it('Returns 10 for [5, 10, 25]', () => {
    assert.deepEqual(middle([5, 10, 12]), [10])
  });

  it('Returns [10, 25] for [5, 10, 25, 12]', () => {
    assert.deepEqual(middle([5, 10, 25, 12]), [10, 25])
  });
})