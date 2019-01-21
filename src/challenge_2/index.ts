import parseInput from '../parseInput';
import { duplicatesCounter, getChecksum } from './checksum';
import { ITracker } from './frequency';
import input from './input';
// import { ICounter } from './reducers';

const data = parseInput(input);
const counter: ITracker = duplicatesCounter(data, [2, 3]);

export default getChecksum(counter);
