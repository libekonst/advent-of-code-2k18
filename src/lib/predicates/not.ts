import { Predicate } from '.';

/** @returns Returns a function that accepts an argument of type T. When invoked, it runs the former func param and returns the opposite result. */
function not<T>(func: Predicate<T>): Predicate<T> {
  return (target: T) => !func(target);
}

export { not };
