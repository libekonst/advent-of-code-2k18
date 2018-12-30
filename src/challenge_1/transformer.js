/**@param {string} string Concatenated serialized signed numeric values.
 * @returns {number[]}
 */
const deserializeNumInput = string =>
  string.match(/\++\d*|-+\d*/g).map(val => parseInt(val))


module.exports = deserializeNumInput
