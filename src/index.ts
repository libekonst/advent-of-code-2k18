/* eslint-disable no-console */
import { part1 as challenge1A, part2 as challenge1B } from './challenge_1';
import { part1 as challenge2A, part2 as challenge2B } from './challenge_2';

const answers: any = {
  'Day 1A': challenge1A,
  'Day 1B': challenge1B,
  'Day 2A': challenge2A,
  'Day 2B': challenge2B,
};

const tux = `
 ------------------
< You are awesome! >
 ------------------
   \\
    \\
        .--.
       |o_o |
       |:_/ |
      //   \\ \\
     (|     | )
    /'\\_   _/'\\
    \\___)=(___/
`;

const table =
  tux +
  `\n~${new Date().toLocaleTimeString()}` +
  '\n\n       ANSWERS' +
  '\n=====================\n' +
  Object.keys(answers)
    .map(k => `  ${k}  |  ${answers[k]}\n`)
    .join('');

console.log(table);
// console.table(answers);
