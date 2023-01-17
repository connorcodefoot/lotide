const assert = require('chai').assert;
const tail   = require('../tail');

describe('#Tail', () => {

  it('returns 5 for [1, 2, 3, 4, 5]', () => {
    assert.strictEqual(tail([1, 2, 3, 4, 5, 6]), 6);
  })

  it('returns 1 for [1]', () => {
    assert.strictEqual(tail([1]), 1);
  })

});

