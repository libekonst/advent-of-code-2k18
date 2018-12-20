/**@param {string} string Concatenated serialized signed numeric values.
 * @returns {number[]}
 */
const deserializeNumInput = string =>
  string.match(/\++\d*|-+\d*/g).map(val => parseInt(val))

/** @param {number[]} arrayOfNums */
const summarize = arrayOfNums => arrayOfNums.reduce((sum, next) => sum + next)

/** @param {string} serializedInput */
const sumStringOfNums = serializedInput =>
  summarize(deserializeNumInput(serializedInput))

module.exports = { sumStringOfNums, deserializeNumInput, summarize }
//TODO: Include leading digits that don't start with a plus sign.
