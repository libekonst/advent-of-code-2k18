// import { summarize, deserializeNumInput } from './transformers'
const { summarize, deserializeNumInput } = require('./transformers')
const data = require('./data')

/** @param {string} serializedInput */
const sumStringOfNums = serializedInput =>
  summarize(deserializeNumInput(serializedInput))

const solution = sumStringOfNums(data)

module.exports = { solution, sumStringOfNums }
//TODO: Include leading digits that don't start with a plus sign.
