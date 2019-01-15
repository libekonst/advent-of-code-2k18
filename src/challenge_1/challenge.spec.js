const sumNumbersFromString = require('./sumNumbersFromString')
const deserializeNumInput = require('./deserialize')
const { parseNumbers, summarize, and } = require('./transformers')

describe('reduces a string of numbers to a sum ', () => {
  test('adds "1+2" to be 3', () => {
    expect(sumNumbersFromString('1 +2')).toBe(3)
  })

  test('adds "-1-2+1" to be -2', () => {
    expect(sumNumbersFromString('-1 -2 +1')).toBe(-2)
  })

  test('ignores non numbers, adding "+1 +2ab +3 cde554" to 6', () => {
    expect(sumNumbersFromString('+1 +2ab +3 cde554')).toBe(6)
  })
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

describe('runs an array of tests(boolean valued fns) against a given target and returns whether they pass or not', () => {
  test('tests if 5 is > 3 and < 10 and returns true', () => {
    const conditions = [x => x < 10, x => x > 3]
    expect(and(conditions)(5)).toBe(true)
  })
  test('tests if [1,2,3] is an empty array and returns false', () => {
    const conditions = [arr => arr.length === 0]
    expect(and(conditions)([1, 2, 3])).toBe(false)
  })
  test('tests if [1,2,3,4,5] has length > 2 and includes 6 and returns false', () => {
    const conditions = [arr => arr.length > 2, arr => arr.includes(6)]
    expect(and(conditions)([1, 2, 3, 4, 5])).toBe(false)
  })
})
