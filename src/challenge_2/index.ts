import parseInput from '../parseInput';
import { checksum, duplicatesCounter } from './checksum';
import input from './input';
import { Counter } from './reducers';

const data = parseInput(input);
const counter: Counter = duplicatesCounter(data);

export default checksum(counter);
