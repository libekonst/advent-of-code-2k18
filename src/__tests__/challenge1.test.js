const {
  sumStringOfNums,
  deserializeNumInput,
  summarize
} = require('../lib/sumStringOfNums')

describe('reduces a string of numbers to a sum ', () => {
  test('adds "+1+2" to be 3', () => {
    expect(sumStringOfNums('+1+2')).toBe(3)
  })

  test('adds "-1-2+1" to be -2', () => {
    expect(sumStringOfNums('-1-2+1')).toBe(-2)
  })

  test('ignores non digits, adding "+1+2ab+3" to 6', () => {
    expect(sumStringOfNums('+1+2ab+3')).toBe(6)
  })

  test('ignores the first sequence of digits that don\'t start with plus, causing "1+2" to be 2', () => {
    expect(sumStringOfNums('1+2')).toBe(2)
  })
})

test('reduces an array of numbers to a sum, making [1,2,3] to equal 6', () => {
  expect(summarize([1, 2, 3])).toBe(6)
})

test('decodes a string of numeric inputs into an array of numbers, causing "+1,+2,-3" to equal [1, 2, -3]', () => {
  expect(deserializeNumInput('+1+2-3')).toEqual([+1, +2, -3])
})
