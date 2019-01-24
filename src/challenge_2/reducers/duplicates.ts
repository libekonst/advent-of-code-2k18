import { hasExactly } from './exact';
import { IMapped, objectFromArray } from './objectFromArray';

/**
 * Transforms each element in the array to an `IMapped<boolean>` object, based on whether
 * the `precision` arg values are satisfied, i.e. `{ "2": true, "3": false }`. Then reduces the array
 * to an `IMapped<number>` object, with each `precision` value as the key and the number of times
 * that precision was satisfied as the value, i.e. `{ "2": 15, "3": 10 }`.
 * @param input An array of strings to be checked for duplicates based on the `precision` arg.
 * @param precision The number of exact repetitions the caller is interested in.
 * @returns `IMapped<number>` An object counting the times `precision` was satisfied.
 */
export const countDuplicates = (input: string[], precision: number[]) => {
  const bools = input.map(hasExactly(precision));
  return precisionTracker(bools, precision);
};

/**
 * Transforms an array of `IMapped<boolean>` objects to an `IMapped<number>`, counting the times
 * each `precision` value was satisfied (`true` was encountered).
 */
const precisionTracker = (bools: IMapped<boolean>[], precision: number[]) => {
  return bools.reduce(
    (counter, satisfied) =>
      objectFromArray(precision, (x, y) => (satisfied[y] ? x[y] + 1 : x[y]), counter),
    {} as IMapped<number>,
  );
};
