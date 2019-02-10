import { arrayToObject, IMapped } from '../lib/array_operations/';

/**
 * Creates an `IMapped<number>` object, whose keys are the `precision` elements
 * and values the number of strings that contain exactly X of any letter,
 * where X is each `precision` element, i.e. `{ "2": 15, "3": 10 }`.
 * @param input An array of strings to be checked for letter repetitions based on the `precision` arg.
 * @param precision The number of exact repetitions the caller is interested in.
 * @returns `IMapped<number>` An object counting the times a string satisfied a `precision` value.
 */
export const countRepetitions = (input: string[], precision: number[]) => {
  const exacts = input.map(filterFrequency(precision));
  const flat = exacts.reduce((a, b) => [...a, ...b], []);
  const setValue = (_: any, value: number) => flat.filter(it => it === value).length;

  return arrayToObject<number, number>({ src: precision, setValue });
};

/**
 * Counts the occurances of each letter in a string and returns an array of unique values
 * that are included in both `precision` and the occurances count.
 * @param precision The number of exact repetitions the caller is interested in.
 * @returns A function that takes the target string and returns the array of intersecting values.
 */
export const filterFrequency = (precision: number[]) => (word: string) => {
  const unique = [...new Set(precision)];
  const frequency = getLetterFrequencyTracker(word);
  const occurances = Object.values(frequency);

  return unique.filter(x => occurances.includes(x));
};

/** Takes a string and counts the occurances of each letter in it, i.e. `{ a: 4, e: 6, n: 2}`. */
export const getLetterFrequencyTracker = (word: string): IMapped<number> => {
  return arrayToObject({
    src: word.split(''),
    setValue: (tracker, letter) => (tracker[letter] || 0) + 1,
  });
};
