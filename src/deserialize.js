/**@param {string} input */
const deserialize = input => input.split(/\n|\s/).filter(val => val != '')

module.exports = deserialize
