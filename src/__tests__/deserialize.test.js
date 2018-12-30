const deserialize = require('../deserialize')
describe('It splits a multiline string into an array of strings by linebreak and whitespace', () => {
  test('transforms "111\\n222\\n333ab\\n" to ["111","222","333ab"]', () => {
    expect(deserialize('111\n222\n333ab\n')).toEqual(['111', '222', '333ab'])
  })

  test('transforms "111\\n222\\n333" to ["111","222","333"]', () => {
    expect(deserialize('111\n222\n333')).toEqual(['111', '222', '333'])
  })

  test('transforms "111 222 333 " to ["111","222","333"]', () => {
    expect(deserialize('111 222 333 ')).toEqual(['111', '222', '333'])
  })

  test('includes both linebreak and whitespace, transforming "aba\\ncs2 aaejk \\n" to ["aba","cs2","aaejk"]', () => {
    expect(deserialize('aba\ncs2 aaejk \n')).toEqual(['aba', 'cs2', 'aaejk'])
  })
})
