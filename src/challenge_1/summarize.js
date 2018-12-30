const deserialize = require('../deserialize')

/** @param {string} input */
const summarize = input =>
  deserialize(input)
    .map(val => parseInt(val, 10))
    .filter(val => !isNaN(val))
    .reduce((sum, next) => sum + next)

module.exports = summarize
