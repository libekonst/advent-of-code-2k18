/* eslint-disable no-console */
import { part1 as challenge1A, part2 as challenge1B } from './challenge_1';
import { part1 as challenge2A } from './challenge_2';
import challenge2 = require('./challenge_2');

const answers: any = {
  'Day 1a': challenge1A,
  'Day 1b': challenge1B,
  'Day 2': challenge2A,
};

const table =
  'ANSWERS:' +
  Object.keys(answers)
    .map(k => `\n${k}: ${answers[k]}`)
    .join('');

console.log(table);
