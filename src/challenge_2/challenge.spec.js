const deserialize = require('./deserialize')
const { countOccurances, hasTwoOrThree } = require('./frequency')
const { getChecksum: checksum, countDuplicates: duplicatesCounter } = require('./checksum')

const {
  updateTracker,
  discardDuplicates,
  updateCounter
} = require('./reducers')

describe('It transforms a string of concatenated same-length inputs to an array of strings', () => {
  test('transforms `111222333` to [`111`,`222`,`333`]', () => {
    expect(deserialize('111222333', 3, false)).toEqual(['111', '222', '333'])
  })

  test('transforms `111\\n222\\n333\\n` to [`111`,`222`,`333`]', () => {
    expect(deserialize('111\n222\n333\n', 3)).toEqual(['111', '222', '333'])
  })
})

describe('Returns the number of occurances in a string for the given value', () => {
  test('counts the number of "a" in "ababa" and returns 3', () => {
    expect(countOccurances('ababa', 'a')).toBe(3)
  })
})

describe('Multiplies all values to produce a checksum', () => {
  test('calculates {a: 2, b:3} and returns 6 ', () => {
    expect(checksum({ twos: 2, threes: 3 })).toBe(6)
  })
})

const tracker = { hasTwo: false, hasThree: false }
describe('Returns a new tracker with updated .hasTwo .hasThree properties if the value is 2 or 3', () => {
  test('Takes a value of 2 and updates tracker.hasTwo to true', () => {
    expect(updateTracker(tracker, 2)).toEqual({ hasTwo: true, hasThree: false })
  })
  test('Takes a value of 3 and updates tracker.hasThree to true', () => {
    expect(updateTracker(tracker, 3)).toEqual({ hasTwo: false, hasThree: true })
  })
  test('Takes a value other than 2 or 3 and returns the original the tracker', () => {
    expect(updateTracker(tracker, 4)).toEqual(tracker)
  })
})

describe('Takes a string and returns an object tracking if a char occurs exactly 2 or 3 times', () => {
  test('Takes "ababa" and returns {hasTwo: true, hasThree: true}', () => {
    expect(hasTwoOrThree('ababa')).toEqual({ hasTwo: true, hasThree: true })
  })
  test('Takes "abab" and returns {hasTwo: true, hasThree: false}', () => {
    expect(hasTwoOrThree('abab')).toEqual({ hasTwo: true, hasThree: false })
  })
  test('Takes "abaa" and returns {hasTwo: false, hasThree: true}', () => {
    expect(hasTwoOrThree('abaa')).toEqual({ hasTwo: false, hasThree: true })
  })
})

describe('Checks if an array includes a given value and appends it if it doesn\'t', () => {
  test('Adds "c" to ["a", "b"]', () => {
    expect(discardDuplicates(['a', 'b'], 'c')).toEqual(['a', 'b', 'c'])
  })
  test('Discards "b" because it is already included in ["a", "b", "c"]', () => {
    expect(discardDuplicates(['a', 'b', 'c'], 'b')).toEqual(['a', 'b', 'c'])
  })
})

describe('Increments the counter based on the tracker\'s properties', () => {
  test('Increments {twos: 1, threes: 1} to {{twos: 2, threes: 2}}', () => {
    expect(
      updateCounter({ twos: 1, threes: 1 }, { hasTwo: true, hasThree: true })
    ).toEqual({ twos: 2, threes: 2 })
  })
  test('Increments {twos: 1, threes: 1} to {{twos: 2, threes: 1}}', () => {
    expect(
      updateCounter({ twos: 1, threes: 1 }, { hasTwo: true, hasThree: false })
    ).toEqual({ twos: 2, threes: 1 })
  })
  test('Increments {twos: 1, threes: 1} to {{twos: 1, threes: 2}}', () => {
    expect(
      updateCounter({ twos: 1, threes: 1 }, { hasTwo: false, hasThree: true })
    ).toEqual({ twos: 1, threes: 2 })
  })
})

describe('Counts the number of elements that have exactly two or exactly three of any char', () => {
  test('Calculates ["abab", "cccdd"] and returns { twos: 2, threes: 1 }', () => {
    expect(duplicatesCounter(['abab', 'cccdd'])).toEqual({ twos: 2, threes: 1 })
  })
  test('Calculates ["abb", "cccdd"] and returns { twos: 1, threes: 1 }', () => {
    expect(duplicatesCounter(['abb', 'cccdd'])).toEqual({ twos: 2, threes: 1 })
  })
  test('Calculates ["ababa", "cccdd"] and returns { twos: 2, threes: 2 }', () => {
    expect(duplicatesCounter(['ababa', 'cccdd'])).toEqual({
      twos: 2,
      threes: 2
    })
  })
})
