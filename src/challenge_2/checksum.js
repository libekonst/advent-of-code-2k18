const { hasTwoOrThree } = require('./transformers')
const { updateCounter } = require('./reducers')

/**
 * @param {string[]} arrayOfInputs
 */
const duplicatesCounter = arrayOfInputs =>
  arrayOfInputs
    .map(input => hasTwoOrThree(input))
    .reduce(updateCounter, { twos: 0, threes: 0 })

/**
 * Calculates a checksum by mutliplying the counter's values.
 * @param {{twos: number, threes: number}} counter A counter storing the values for the checksum.
 * @returns {number} Product.
 */
const checksum = counter => Object.values(counter).reduce((a, b) => a * b, 1)

module.exports = { duplicatesCounter, checksum }
