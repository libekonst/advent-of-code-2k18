export interface IMapped<U> {
  [trackValue: string]: U;
}
type Setter<U, T> = (object: IMapped<U>, key: T) => U;
/**
 * Reduces `sourceArray` of type `Array<T>` to an object of type `IMapped<U>`, whose keys become the sourceArray elements
 * and values become the results of the `calcValue` callback, after being run on the respective array element.
 * @param src An array whose elements will be used as the keys of the returned object.
 * @param setValue A function that takes the `IMapped<U>` object and the `T` element of the array and
 * calculates the value `U` for the new property of the object. Run for every element. Value defaults to `0`.
 * @param initObj Object to use as an initial object. Defaults to empty object `{ }`.
 * @returns An `IMapped<U>` object, with each `sourceArray` element as the key and `U` as the value.
 */
export const objectFromArray = <T, U>(
  src: T[],
  setValue: (object: IMapped<U>, key: T) => U = x => 0 as any,
  initObj: IMapped<U> = {},
) => src.reduce((obj, key) => ({ ...obj, [`${key}`]: setValue(obj, key) }), initObj);
