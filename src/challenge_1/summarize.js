const parseInput = require('../parseInput')

/** @param {string} input */
const summarize = input =>
  parseInput(input)
    .map(val => parseInt(val, 10))
    .filter(val => !isNaN(val))
    .reduce((sum, next) => sum + next)

module.exports = summarize
