import parseInput from '../parseInput';
import { duplicatesCounter, getChecksum } from './checksum';
import input from './input';
// import { ICounter } from './reducers';

const data = parseInput(input);
export const part1 = getChecksum(duplicatesCounter(data, [2, 3]));
// export default getChecksum(duplicatesCounter(data, [2, 3]));
