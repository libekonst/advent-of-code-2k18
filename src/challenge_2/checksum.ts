import { Counter, updateCounter } from './reducers';
import { hasTwoOrThree } from './transformers';

const duplicatesCounter = (arrayOfInputs: string[]): Counter => {
  return arrayOfInputs
    .map(input => hasTwoOrThree(input))
    .reduce(updateCounter, { twos: 0, threes: 0 });
};

/** Calculates a checksum by mutliplying the counter's values. */
const checksum = (counter: Counter): number => {
  return Object.values(counter).reduce((a, b) => a * b, 1);
};

export { duplicatesCounter, checksum };
