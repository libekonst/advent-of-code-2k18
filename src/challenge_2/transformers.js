const { updateTracker, discardDuplicates } = require('./reducers')

/**
 * Returns the occurances of a character or pattern in a given string.
 * @param {string} string
 * @param {string} character
 */
const countOccurances = (string, character) => {
  return string.match(new RegExp(character, 'g')).length
}

/**
 * Returns an object tracking if any char occurs exactly 2 or 3 times in a given string.
 * @param {string} string
 */
const hasTwoOrThree = string =>
  string
    .split('')
    .reduce(discardDuplicates, [])
    .map(val => countOccurances(string, val))
    .reduce(updateTracker, { hasTwo: false, hasThree: false })

module.exports = { countOccurances, hasTwoOrThree }
