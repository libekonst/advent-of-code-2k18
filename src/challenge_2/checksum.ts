import { hasExactly, IExact } from './exact';
import { ITracker } from './frequency';
/** Calculates a checksum by mutliplying the counter's values. */
export const getChecksum = (counter: ITracker): number => {
  return Object.values(counter).reduce((a, b) => a * b, 1);
};

export const duplicatesCounter = (arrayOfInputs: string[], exactTimes: number[]) => {
  return arrayOfInputs
    .map(hasExactly(exactTimes))
    .reduce(updateCounter, getTrackerFromArray(exactTimes));
};

const updateCounter = (counter: ITracker, tracker: IExact): ITracker => {
  const keys = Object.keys(counter);
  const newTracker = keys.reduce((acc, next) => {
    return { ...acc, [next]: tracker[next] ? acc[next] + 1 : acc[next] };
  }, counter);

  return newTracker;
};
// return (counter: ITracker, tracker: IExact): ITracker => ({
//   3: tracker['3'] ? counter['3'] + 1 : counter['3'],
//   2: tracker['2'] ? counter['2'] + 1 : counter['2'],
// });

const getTrackerFromArray = (arr: any[], init = 0): ITracker => {
  return arr.reduce((tracker, value) => ({ ...tracker, [value]: init }), {});
};
