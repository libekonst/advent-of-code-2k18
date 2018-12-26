/**@param {string} string A string of concatenated IDs.
 * @param {number} idLength
 * @param {boolean} hasLineBreak Whether the IDs are separated by linebreak '\n' chars.
 * @returns {string[]} An array of all the IDs.
 */
const deserialize = (string, idLength, hasLineBreak = true) => {
  // +1 to skip over the '\n' linebreak char inserted by the template literal
  // const step = hasLineBreak ? idLength + 1 : idLength
  const step = (hasLineBreak && 1) + idLength
  const numberOfIds = string.length / step
  let arrayOfIds = []

  for (let i = 0; i < numberOfIds; i++) {
    const start = i * step
    const finish = start + idLength
    const newString = string.slice(start, finish)
    arrayOfIds.push(newString)
  }

  // for (let i = 0; i < string.length; i += step) {
  //   let newString = string.slice(i, i + idLength)
  //   array.push(newString)
  // }

  return arrayOfIds
}

module.exports = deserialize
