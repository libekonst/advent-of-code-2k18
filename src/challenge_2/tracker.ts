export interface ITracker {
  [trackValue: string]: number;
}

type CalcValue<V> = (tracker: ITracker, property: V) => any;

export const trackerFromArray = <T>(
  arr: T[],
  getValue: CalcValue<T> = x => 0,
  initialValue = {},
) => {
  return arr.reduce(
    (tracker, property) => ({
      ...tracker,
      [property as any]: getValue(tracker, property),
    }),
    initialValue,
  );
};
