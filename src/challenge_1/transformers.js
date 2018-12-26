/**@param {string} string Concatenated serialized signed numeric values.
 * @returns {number[]}
 */
const deserializeNumInput = string =>
  string.match(/\++\d*|-+\d*/g).map(val => parseInt(val))

/** @param {number[]} arrayOfNums */
const summarize = arrayOfNums => arrayOfNums.reduce((sum, next) => sum + next)

module.exports = { deserializeNumInput, summarize }
