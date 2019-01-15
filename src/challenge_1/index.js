const input = require('./input')
const prepareData = require('./prepareData')
const { summarize } = require('./transformers')

const data = prepareData(input)
const part1 = summarize(data)
const part2 = null

module.exports = { part1, part2 }
