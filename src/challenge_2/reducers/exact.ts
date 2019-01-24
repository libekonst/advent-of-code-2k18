import { IMapped, objectFromArray } from './objectFromArray';

/**
 * Transforms a string into an `IMapped<number>` object, counting the number of times each character
 * appears in the string, i.e. `{ a: 2, e: 3, d: 5 }`. Then transforms it into an `IMapped<boolean>`
 * object, based on whether the `precision` arg values are satisfied, i.e. `{2: true, 3: true}`.
 * @param precision The number of exact repetitions the caller is interested in. These values
 * are used as the keys of the returned `IMapped<boolean>` object.
 * @returns A function that accepts a string to be checked and returns the `IMapped<boolean>` object.
 */
export const hasExactly = (precision: number[]) => (word: string): IMapped<boolean> => {
  const frequency = getLetterFrequencyTracker(word);
  const occurances = Object.values(frequency);

  return objectFromArray(precision, (x, y) => occurances.includes(y));
};

/** Accepts a string and counts the times each character appears in it, i.e. `{ a: 4, g: 6, e: 2}`. */
export const getLetterFrequencyTracker = (word: string): IMapped<number> =>
  objectFromArray(word.split(''), (tracker, char) => (tracker[char] || 0) + 1);
