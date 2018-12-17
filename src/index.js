/* eslint-disable no-console */
const { sumStringOfNums } = require('./lib/sumStringOfNums')
const data1 = require('./data/challenge1')

const answers = {
  'Day 1': sumStringOfNums(data1)
}

console.log(answers)
