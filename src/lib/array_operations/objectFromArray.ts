export interface IMapped<U> {
  [trackValue: string]: U;
}
export interface IParams<T, U> {
  src: T[];
  setValue?: (object: IMapped<U>, key: T) => U;
  initObj?: IMapped<U>;
}

/**
 * Creates an object of type `IMapped<U>`, whose keys are the `src` array elements
 * and values are the results of the `setValue` callback, after being invoked with the respective src element.
 * @param src An array whose elements will be used as the keys of the returned object.
 * @param setValue A function that takes the `IMapped<U>` object and the `T` element of the array and
 * calculates the value `U` for the new property of the object. Run for every element. Value defaults to `0`.
 * @param initObj Object to use as an initial accumulator. Defaults to empty object `{ }`.
 * @returns An `IMapped<U>` object, with each `src` element as the key and `U` as the value.
 */
export const objectFromArray = <T, U>({
  src,
  setValue = () => 0 as any,
  initObj = {} as IMapped<U>,
}: IParams<T, U>): IMapped<U> =>
  src.reduce((obj, key) => ({ ...obj, [`${key}`]: setValue(obj, key) }), initObj);
