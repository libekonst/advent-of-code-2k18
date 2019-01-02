/**
 * @param {any} el An element in the array
 * @param {number} i The element's index
 * @param {any[]} arr The array that is being itetrated
 */
const findDuplicates = (el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el)

const testArr = []

testArr.filter(findDuplicates)

/**
 *
 * @param {string} string
 * @param {*} value
 */
const countOccurances = (string, value) => {
  return string.match(new RegExp(value, 'g')).length
}

module.exports = { countOccurances }
