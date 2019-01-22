interface ITracker<U> {
  [trackValue: string]: U;
}

/**
 * Reduces `sourceArray` of type `Array<T>` to an object of type `ITracker<U>`, with each element as the key
 * and `U` as the value.
 * @param sourceArray An array whose elements will be used as the keys of the returned object.
 * @param calcValue A function that takes the `ITracker<U>` accumulator and the `T` element of the array and
 * calculates the value `U` for the new property of the accumulator. Defaults to `0`.
 * @param initialTracker Value to use as the initial accumulator. Defaults to empty object `{ }`.
 * @returns An `ITracker<U>` object, with each `sourceArray` element as the key and `U` as the value.
 */
const trackerFromArray = <T, U>(
  sourceArray: T[],
  calcValue: (tracker: ITracker<U>, property: T) => U = y => 0 as any,
  initialTracker: ITracker<U> = {},
): ITracker<U> => {
  return sourceArray.reduce(
    (tracker, property) => ({
      ...tracker,
      [property as any]: calcValue(tracker, property),
    }),
    initialTracker,
  );
};

export { trackerFromArray, ITracker };
