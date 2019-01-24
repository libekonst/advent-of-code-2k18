import { hasExactly } from './exact';
import { IMapped, objectFromArray } from './objectFromArray';

/**
 * Transforms each element in the array to an `IMapped<boolean>` object, based on whether
 * the `precision` arg values are satisfied, i.e. `{ "2": true, "3": false }`. Then reduces the array
 * to an `IMapped<number>` object, with each `precision` value as the key and the number of times
 * that precision was satisfied as the value, i.e. `{ "2": 15, "3": 10 }`.
 * @param input An array of strings to be checked for duplicates based on the `precision` arg.
 * @param precision The number of exact repetitions the caller is interested in.
 * @returns `IMapped<number>` An object with `precision` as the keys and the times each `precision`
 * was satisfied as the values.
 */
export const countDuplicates = (input: string[], precision: number[]) => {
  const bools = input.map(hasExactly(precision));
  const timesSatisfied = bools.reduce(updateCounter, objectFromArray(precision));
  return timesSatisfied;
};

/**
 * Increments an `IMapped<number>` object's values, based on whether `true` is encountered in
 * the `satisfied` param.
 * @param counter An object counting the times `precision` was satisfied.
 * @param satisfied An object defining whether each precision was satisfied.
 * @returns A new `IMapped<number>` with updated values.
 */
const updateCounter = (counter: IMapped<number>, satisfied: IMapped<boolean>) => {
  const updatedCounter = objectFromArray(
    Object.keys(counter),
    (x, y) => (satisfied[y] ? x[y] + 1 : x[y]),
    counter,
  );

  return updatedCounter;
};
