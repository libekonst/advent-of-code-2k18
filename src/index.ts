/* eslint-disable no-console */
import { part1 as challenge1A, part2 as challenge1B } from './challenge_1';
import { part1 as challenge2A, part2 as challenge2B } from './challenge_2';
import challenge2 = require('./challenge_2');

const answers: any = {
  'Day 1A': challenge1A,
  'Day 1B': challenge1B,
  'Day 2A': challenge2A,
  'Day 2B': challenge2B,
};

const table =
  'ANSWERS:' +
  Object.keys(answers)
    .map(k => `\n${k}: ${answers[k]}`)
    .join('');

console.log(table);
