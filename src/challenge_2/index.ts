import parseInput from '../parseInput';
import { countDuplicates, getChecksum } from './checksum';
import input from './input';
// import { ICounter } from './reducers';

const data = parseInput(input);
export const part1 = getChecksum(countDuplicates(data, [2, 3]));
