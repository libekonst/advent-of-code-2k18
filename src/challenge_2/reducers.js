/**
 * Returns a new tracker with updated .hasTwo .hasThree properties based on value param.
 * @param {{hasTwo: boolean, hasThree: boolean}} tracker The original tracker.
 * @param {number} value The value used to calculate if the tracker's properties should be updated.
 */
const updateTracker = (tracker, value) => {
  let tempTracker = {}
  if (value === 2) tempTracker.hasTwo = true
  if (value === 3) tempTracker.hasThree = true

  return { ...tracker, ...tempTracker }
}

/**
 * Appends a value to an array if not included, otherwise returns the original array.
 * @param {string[]} values
 * @param {string} newValue
 */
const discardDuplicates = (values, newValue) =>
  values.includes(newValue) ? values : [...values, newValue]

module.exports = { updateTracker, discardDuplicates }
