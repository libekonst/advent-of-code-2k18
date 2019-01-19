import { Predicate } from '../lib/predicates';
import { every } from '../lib/predicates/index';

/** Converts an array of strings to an array of integers and returns only those that satisfy the provided conditions. */
function parseNumbers(values: string[], conditions: Predicate<number>[]): number[] {
  const parsed = values.map(val => parseInt(val, 10));
  const filtered = parsed.filter(every(conditions));
  return filtered;
}

export { parseNumbers };
