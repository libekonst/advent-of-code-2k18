const {
  sumStringOfNums,
  deserializeNumInput,
  summarize
} = require('../lib/sumStringOfNums')

describe('reduces a string of serialized signed numeric inputs to a sum ', () => {
  test('adds "+1+2" to be 3', () => {
    expect(sumStringOfNums('+1+2')).toBe(3)
  })

  test('adds "-1-2+1" to be -2', () => {
    expect(sumStringOfNums('-1-2+1')).toBe(-2)
  })

  test('ignores non numbers, adding "+1+2ab+3" to 6', () => {
    expect(sumStringOfNums('+1+2ab+3')).toBe(6)
  })

  test('ignores unsigned leading numbers, causing "1+2" to be 2', () => {
    expect(sumStringOfNums('1+2')).toBe(2)
  })
})

test('reduces an array of numbers to a sum, causing [1,2,3] to equal 6', () => {
  expect(summarize([1, 2, 3])).toBe(6)
})

describe('decodes a string of concatenated signed numeric inputs into an array of numbers', () => {
  test('decodes "+1,+2,-3" to [1, 2, -3]', () => {
    expect(deserializeNumInput('+1+2-3')).toEqual([+1, +2, -3])
  })
  test('ignores non numbers, transforming "+2-4axf-3o+2" to [+2,-4,-3,+2]', () => {
    expect(deserializeNumInput('+2-4axf-3o+2')).toEqual([+2, -4, -3, +2])
  })
  test('ignores unsigned leading numbers, transforming "123-53+18+2" to [-53,+18,+2]', () => {
    expect(deserializeNumInput('123-53+18+2')).toEqual([-53, +18, +2])
  })
})
