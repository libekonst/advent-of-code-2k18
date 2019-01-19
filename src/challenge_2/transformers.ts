import { discardDuplicates, updateTracker } from './reducers';

/** Returns the occurances of a character or pattern in a given string. */
const countOccurances = (target: string, character: string) => {
  return target.match(new RegExp(character, 'g')).length;
};

/** Returns an object tracking if any char occurs exactly 2 or 3 times in a given string. */
const hasTwoOrThree = (target: string) => {
  return target
    .split('')
    .reduce(discardDuplicates, [])
    .map(val => countOccurances(target, val))
    .reduce(updateTracker, { hasTwo: false, hasThree: false });
};

export { countOccurances, hasTwoOrThree };
