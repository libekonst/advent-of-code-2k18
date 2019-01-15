const parseInput = require('../parseInput')
const { parseNumbers } = require('./transformers')

/** @param {string} input */
const prepareData = input => {
  const values = parseInput(input)
  const isNotNaN = val => !isNaN(val)
  const preparedData = parseNumbers(values, [isNotNaN])
  return preparedData
}

module.exports = prepareData
