type operation = (a: number, b: number) => number;

/** Accepts a callback that takes two numbers and performs an operation.
 * @returns A fn that reduces an array of numbers using the provided callback.
 */
const reduce = (func: operation, init = 0) => (values: number[]) =>
  values.reduce(func, init);

/** Reduces an array of numbers by adding all values together. */
export const sum = reduce((a, b) => a + b);

/** Multiplies all array elements together and returns the product. */
export const multiply = reduce((a, b) => a * b, 1);
