const input = require('./input')
const parseInput = require('../parseInput')
const { checksum, duplicatesCounter } = require('./checksum')

const data = parseInput(input)

module.exports = checksum(duplicatesCounter(data))
