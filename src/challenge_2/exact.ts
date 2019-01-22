import { ITracker, trackerFromArray } from './tracker';

/**
 * Transforms a string into an `ITracker<number>` object, counting the number of times each character
 * appears in the string, i.e. `{ a: 2, e: 3, d: 5 }`. Then transforms it into an `ITracker<boolean>`
 * object, based on whether the `precision` arg values are satisfied, i.e. `{2: true, 3: true}`.
 * @param precision The number of exact repetitions the caller is interested in. These values
 * are used as the keys of the returned `ITracker<boolean>` object.
 * @returns A function that accepts a string to be checked and returns the `ITracker<boolean>` object.
 */
export const hasExactly = (precision: number[]) => (word: string): ITracker<boolean> => {
  const frequency = getLetterFrequencyTracker(word);
  const occurances = Object.values(frequency);

  return trackerFromArray(precision, (x, y) => occurances.includes(y));
};

/**
 * Accepts a string and returns an `ITracker<number>` object, counting the number of times each character
 * appears in the string, i.e. `{ a: 4, g: 6, e: 2}`.
 * @param word
 */
export const getLetterFrequencyTracker = (word: string): ITracker<number> => {
  const chars = word.split('');
  const callback = (tracker: ITracker<number>, char: string) => (tracker[char] || 0) + 1;

  return trackerFromArray(chars, callback);
};
