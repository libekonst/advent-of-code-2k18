import { Predicate } from './';
// * A combinator is a higher-order function that uses only function application and earlier defined combinators to define a result from its arguments.

/** @returns Returns a function that accepts an argument of type T. When invoked, it runs the former func param and returns the opposite result. */
export const not = <T>(func: Predicate<T>): Predicate<T> => (target: T) => !func(target);

/**
 * Runs a collection of tests on a target of type `T` and returns whether every test is satisfied.
 * @param conditions An array of functions that accept an arg of type `T` and return `boolean`.
 * @returns A function that accepts a target `T`, runs all tests against it and returns whether they passed or not.
 */
export const every = <T>(conditions: Predicate<T>[]): Predicate<T> => (target: T) =>
  conditions.every(c => c(target));
