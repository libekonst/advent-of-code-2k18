const deserialize = require('./deserialize')

describe('It transforms a string of concatenated same-length inputs to an array of strings', () => {
  test('transforms `111222333` to [`111`,`222`,`333`]', () => {
    expect(deserialize('111222333', 3, false)).toEqual(['111', '222', '333'])
  })

  test('transforms `111\\n222\\n333\\n` to [`111`,`222`,`333`]', () => {
    expect(deserialize('111\n222\n333\n', 3)).toEqual(['111', '222', '333'])
  })
})
