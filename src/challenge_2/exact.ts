import { getLetterFrequencyTracker } from './frequency';

export interface IExact {
  [trackNumber: string]: boolean;
}

export const hasExactly = (intersection: number[]) => (word: string): IExact => {
  const frequency = getLetterFrequencyTracker(word);
  const occurances = Object.values(frequency);

  return intersection.reduce(
    (acc, num) => ({ ...acc, [num]: occurances.includes(num) }),
    {},
  );
};
