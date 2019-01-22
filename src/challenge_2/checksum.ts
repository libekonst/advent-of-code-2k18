import { multiply } from '../lib/array_operations';
import { hasExactly } from './exact';
import { ITracker, trackerFromArray } from './tracker';

/** Generates a checksum by counting specific duplicates and multiplying the values. */
export const checksum = (data: string[]): number => {
  const counter = countDuplicates(data, [2, 3]);
  const values = Object.values(counter);
  return multiply(values);
};

/**
 * Transforms each element in the array to an `ITracker<boolean>` object, based on whether
 * the `precision` arg values are satisfied, i.e. `{ "2": true, "3": false }`. Then reduces the array
 * to an `ITracker<number>` object, with each `precision` value as the key and the number of times
 * that precision was satisfied as the value, i.e. `{ "2": 15, "3": 10 }`.
 * @param input An array of strings to be checked for duplicates based on the `precision` arg.
 * @param precision The number of exact repetitions the caller is interested in.
 * @returns `ITracker<number>` An object with `precision` as the keys and the times each `precision`
 * was satisfied as the values.
 */
const countDuplicates = (input: string[], precision: number[]): ITracker<number> => {
  return input
    .map(hasExactly(precision))
    .reduce(updateCounter, trackerFromArray(precision));
};

export { countDuplicates };

/**
 * Increments an `ITracker<number>` object's values, based on whether `true` is encountered in
 * the `satisfied` param.
 * @param counter An object counting the times `precision` was satisfied.
 * @param satisfied An object defining whether each precision was satisfied.
 * @returns A new `ITracker<number>` with updated values.
 */
const updateCounter = (counter: ITracker<number>, satisfied: ITracker<boolean>) => {
  const calcValue = (tracker: ITracker<number>, value: string) =>
    satisfied[value] ? tracker[value] + 1 : tracker[value];

  return trackerFromArray(Object.keys(counter), calcValue, counter);
};
