const deserialize = require('../deserialize')
describe('It splits a multiline string into an array of strings by linebreak and whitespace', () => {
  test('It transforms "111\\n222\\n333\\n" to ["111","222","333"]', () => {
    expect(deserialize('111\n222\n333\n')).toEqual(['111', '222', '333'])
  })

  test('It transforms "111\\n222\\n333" to ["111","222","333"]', () => {
    expect(deserialize('111\n222\n333')).toEqual(['111', '222', '333'])
  })

  test('It transforms "111 222 333 " to ["111","222","333"]', () => {
    expect(deserialize('111 222 333 ')).toEqual(['111', '222', '333'])
  })
})
