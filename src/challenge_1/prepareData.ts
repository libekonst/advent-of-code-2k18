import { every, not, Predicate } from '../lib/predicates';
import parseInput from '../parseInput';

export const prepareData = (input: string): number[] => {
  const values = parseInput(input);
  const preparedData = parseNumbers(values, [not(isNaN)]);
  return preparedData;
};

/** Converts an array of strings to an array of integers and returns only those that satisfy the provided conditions. */
const parseNumbers = (values: string[], conditions: Predicate<number>[]): number[] => {
  const parsed = values.map(val => parseInt(val, 10));
  const filtered = parsed.filter(every(conditions));
  return filtered;
};
