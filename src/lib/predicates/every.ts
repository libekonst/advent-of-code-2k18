import { Predicate } from '.';

/**
 * Runs an array of tests on a target value and returns whether every test is satisfied.
 * @param {Predicate[]} conditions An array of tests.
 * @returns {Predicate} A function that accepts a target, runs all tests against it and returns whether they passed or not.
 */
const every = <T>(conditions: Predicate<T>[]): Predicate<T> => {
  return (target: T) => conditions.every(c => c(target));
};

export default every;
