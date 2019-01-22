const prepareData = require('./summarize')
const deserializeNumInput = require('./deserialize')
const { parseNumbers, summarize, and } = require('./parseNumbers')

describe('transforms a string of numbers to an array, filtering out NaN values ', () => {
  test('transforms "1 +2" to be [1,2]', () => {
    expect(prepareData('1 +2')).toEqual([1, 2])
  })

  test('transforms "-1 -2 +1" to be [-1,-2, 1]', () => {
    expect(prepareData('-1 -2 +1')).toEqual([-1, -2, 1])
  })

  test('ignores non numbers, transforming "+1 +2ab +3 cde554" to [1, 2, 3]', () => {
    expect(prepareData('+1 +2ab +3 cde554')).toEqual([1, 2, 3])
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
