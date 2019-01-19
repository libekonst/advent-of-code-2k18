import { not } from '../lib/predicates';
import parseInput from '../parseInput';
import { parseNumbers } from './parseNumbers';

const prepareData = (input: string): number[] => {
  const values = parseInput(input);
  const preparedData = parseNumbers(values, [not(isNaN)]);
  return preparedData;
};

export default prepareData;
