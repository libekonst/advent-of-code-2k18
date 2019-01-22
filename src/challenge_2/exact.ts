import { ITracker, trackerFromArray } from './tracker';

export interface IExact {
  [trackNumber: string]: boolean;
}

export const hasExactly = (intersection: number[]) => (word: string): IExact => {
  const frequency = getLetterFrequencyTracker(word);
  const occurances = Object.values(frequency);

  return trackerFromArray(intersection, (x, y) => occurances.includes(y));
};

export const getLetterFrequencyTracker = (word: string): ITracker => {
  const chars = word.split('');

  return trackerFromArray(chars, (tracker, char) => (tracker[char] || 0) + 1);
};
