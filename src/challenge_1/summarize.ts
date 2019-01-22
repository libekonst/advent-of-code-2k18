import { sum } from '../lib/array_operations';
import { every, not, Predicate } from '../lib/predicates';
import parseInput from '../parseInput';

export const summarized = (input: string): number => {
  const values = parseInput(input);
  const parsed = parseNumbers(values, [not(isNaN)]);

  return sum(parsed);
};

/** Converts an array of strings to an array of integers and returns only those that satisfy the provided conditions. */
const parseNumbers = (values: string[], conditions: Predicate<number>[]): number[] => {
  const parsed = values.map(val => parseInt(val, 10));
  const filtered = parsed.filter(every(conditions));
  return filtered;
};
