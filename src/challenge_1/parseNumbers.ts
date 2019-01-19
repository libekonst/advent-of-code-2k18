import { Predicate } from '../lib/predicates';
import { every } from '../lib/predicates/index';

/** Converts an array of strings to an array of integers and returns only those that satisfy the provided conditions. */
const parseNumbers = (values: string[], conditions: Predicate<number>[]): number[] => {
  return values.map(val => parseInt(val, 10)).filter(every(conditions));
};

export { parseNumbers };
