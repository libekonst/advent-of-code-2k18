export interface ITracker {
  [trackValue: string]: number;
}

export const getLetterFrequencyTracker = (word: string): ITracker => {
  return word.split('').reduce(updateTracker, {});
};

const updateTracker = (tracker: ITracker, char: string): ITracker => {
  return { ...tracker, [char]: (tracker[char] || 0) + 1 };
};
