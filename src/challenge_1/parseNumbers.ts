import { every, Predicate } from '../lib/predicates';

/** Converts an array of strings to an array of integers and returns only those that satisfy the provided conditions. */
function parseNumbers(values: string[], conditions: Predicate<number>[]): number[] {
  const parsed = values.map(val => parseInt(val, 10));
  const filtered = parsed.filter(every(conditions));
  return filtered;
}

export { parseNumbers };
