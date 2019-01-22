import { ITracker, trackerFromArray } from './tracker';

export const hasExactly = (strict: number[]) => (word: string): ITracker<boolean> => {
  const frequency = getLetterFrequencyTracker(word);
  const occurances = Object.values(frequency);

  return trackerFromArray(strict, (x: ITracker<boolean>, y) => occurances.includes(y));
};

export const getLetterFrequencyTracker = (word: string): ITracker<number> => {
  const chars = word.split('');
  const callback = (tracker: ITracker<number>, char: string) => (tracker[char] || 0) + 1;

  return trackerFromArray(chars, callback);
};
