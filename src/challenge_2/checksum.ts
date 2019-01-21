import { hasExactly, IExact } from './exact';
import { ITracker } from './frequency';

const duplicatesCounter = (arrayOfInputs: string[]): ITracker => {
  return arrayOfInputs.map(hasExactly([2, 3])).reduce(updateCounter, { '2': 0, '3': 0 });
};

export const updateCounter = (counter: ITracker, tracker: IExact): ITracker => ({
  3: tracker['3'] ? counter['3'] + 1 : counter['3'],
  2: tracker['2'] ? counter['2'] + 1 : counter['2'],
});

/** Calculates a checksum by mutliplying the counter's values. */
const getChecksum = (counter: ITracker): number => {
  return Object.values(counter).reduce((a, b) => a * b, 1);
};

export { duplicatesCounter, getChecksum };
