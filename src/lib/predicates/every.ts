import { Predicate } from '.';

/**
 * Runs a collection of tests on a target of type T and returns whether every test is satisfied.
 * @param conditions An array of tests.
 * @returns A function that accepts a target, runs all tests against it and returns whether they passed or not.
 */
function every<T>(conditions: Predicate<T>[]): Predicate<T> {
  return (target: T) => conditions.every(c => c(target));
}

export default every;
