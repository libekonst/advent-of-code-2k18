const parseInput = require('../parseInput')
const { parseNumbers, summarize } = require('./transformers')

/** @param {string} input */
const sumNumbersFromString = input => {
  const values = parseInput(input)
  const isNotNaN = val => !isNaN(val)
  const preparedData = parseNumbers(values, [isNotNaN])

  return summarize(preparedData)
}

module.exports = sumNumbersFromString
