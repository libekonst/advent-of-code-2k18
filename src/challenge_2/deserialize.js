/**@param {string} stringOfIds A string of concatenated same-length IDs.
 * @param {number} idLength
 * @param {boolean} hasLineBreak Whether the IDs are separated by linebreak '\n' chars.
 * @returns {string[]} An array of all the IDs.
 */
const deserialize = (stringOfIds, idLength, hasLineBreak = true) => {
  // +1 to skip over the '\n' linebreak char inserted by the template literal
  const step = hasLineBreak ? idLength + 1 : idLength
  let arrayOfIds = []

  for (let i = 0; i < stringOfIds.length; i += step) {
    let id = stringOfIds.slice(i, i + idLength)
    arrayOfIds.push(id)
  }

  return arrayOfIds
}

module.exports = deserialize
