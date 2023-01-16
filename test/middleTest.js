const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle([5, 10, 12]), [10, 25], false)
