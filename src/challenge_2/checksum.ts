import { hasExactly } from './exact';
import { ITracker, trackerFromArray } from './tracker';

/** Calculates a checksum by mutliplying the counter's values. */
export const getChecksum = (counter: ITracker<number>): number => {
  return Object.values(counter).reduce((a, b) => a * b, 1);
};

export const duplicatesCounter = (arrayOfInputs: string[], exactTimes: number[]) => {
  return arrayOfInputs
    .map(hasExactly(exactTimes))
    .reduce(updateCounter, trackerFromArray(exactTimes));
};

const updateCounter = (counter: ITracker<number>, exact: ITracker<boolean>) => {
  const callback = (tracker: ITracker<number>, value: string) =>
    exact[value] ? tracker[value] + 1 : tracker[value];

  return trackerFromArray(Object.keys(counter), callback, counter);
};
