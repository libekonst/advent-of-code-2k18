import parseInput from '../parseInput';
import { countDuplicates, getChecksum } from './checksum';
import input from './input';
import { intersection } from './intersection';
// import { ICounter } from './reducers';

const data = parseInput(input);
export const part1 = getChecksum(countDuplicates(data, [2, 3]));
export const part2 = intersection(data);
