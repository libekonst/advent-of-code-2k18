const sumStringOfNums = string =>
  string
    .match(/\++\d*|-+\d*/g)
    .map(i => parseInt(i))
    .reduce((sum, next) => sum + next)

module.exports = { sumStringOfNums }
