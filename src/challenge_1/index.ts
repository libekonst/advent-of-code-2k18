import { sum } from '../lib/array_operations';
import input from './input';
import { prepareData } from './prepareData';

const data = prepareData(input);
const part1 = sum(data);
const part2: any = null;

export { part1, part2 };
