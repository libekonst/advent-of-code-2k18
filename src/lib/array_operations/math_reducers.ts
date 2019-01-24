type operation = (a: number, b: number) => number;

/** Accepts a callback that takes two numbers and performs an operation with them,
 * then returns a fn that takes an array of numbers and reduces it using the initial callback.
 */
const math = (func: operation, init = 1) => (values: number[]) =>
  values.reduce(func, init);

/** Reduces an array of numbers by adding all values together. */
export const sum = math((a, b) => a + b, 0);

/** Multiplies all array elements together and returns the product.  */
export const multiply = math((a, b) => a * b);
