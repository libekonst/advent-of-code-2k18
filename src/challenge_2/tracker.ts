interface ITracker<P> {
  [trackValue: string]: P;
}

type CalcValue<T, U> = (tracker: ITracker<U>, property: T) => U;

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
