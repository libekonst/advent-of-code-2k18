import { Predicate } from '.';

/**
 * @param func A function that takes parameter of type T and returns boolean.
 * @returns  Returns a function that accepts a param of type T. When invoked, it runs the former func param and returns the opposite result.
 */
const not = <T>(func: Predicate<T>): Predicate<T> => {
  return (target: T) => !func(target);
};

export { not };
