import parseInput from '../parseInput';
import { checksum } from './checksum';
import input from './input';
import { intersection } from './intersection';
// import { ICounter } from './reducers';

const data = parseInput(input);
export const part1 = checksum(data);
export const part2 = intersection(data);
