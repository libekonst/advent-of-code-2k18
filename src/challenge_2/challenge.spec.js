const deserialize = require('./deserialize')
const { countOccurances } = require('./transformers')

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
