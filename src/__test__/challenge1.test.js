const { sumStringOfNums } = require('../lib/challenge1')

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

// test('reduces [1, 2, 3, -1] to 5', () => {
//   expect(summarize([1, 2, 3, -1])).toBe(5)
// })

// test('adds 1 + 2 to eqaul 3', () => {
//   expect(summarize(1, 2)).toBe(3)
// })
