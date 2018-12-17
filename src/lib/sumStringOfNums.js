// const sumStringOfNums = string =>
//   string
//     .match(/\++\d*|-+\d*/g)
//     .map(i => parseInt(i))
//     .reduce((sum, next) => sum + next)

/**@param {string} string Serialized numeric values into a string.
 * @returns {number[]}
 */
const deserializeNumInput = string =>
  string.match(/\++\d*|-+\d*/g).map(val => parseInt(val))

/**@param {number[]} arrayOfNums
 * @returns {number}
 */
const summarize = arrayOfNums => arrayOfNums.reduce((sum, next) => sum + next)

const sumStringOfNums = serializedInput =>
  summarize(deserializeNumInput(serializedInput))

module.exports = { sumStringOfNums, deserializeNumInput, summarize }
//TODO: Include leading digits that don't start with a plus sign.
