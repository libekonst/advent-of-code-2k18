// tslint:disable-next-line:interface-name
interface Tracker {
  hasTwo?: boolean;
  hasThree?: boolean;
}

export interface Counter {
  twos?: number;
  threes?: number;
}
/** Returns a new tracker with updated .hasTwo .hasThree properties based on value param. */
const updateTracker = (tracker: Tracker, value: number) => {
  const tempTracker: Tracker = {};
  if (value === 2) {
    tempTracker.hasTwo = true;
  }
  if (value === 3) {
    tempTracker.hasThree = true;
  }

  return { ...tracker, ...tempTracker };
};

const updateCounter = (counter: Counter, tracker: Tracker) => ({
  threes: tracker.hasThree ? counter.threes + 1 : counter.threes,
  twos: tracker.hasTwo ? counter.twos + 1 : counter.twos,
});

/** Appends a value to an array if not included, otherwise returns the original array. */
const discardDuplicates = (values: string[], newValue: string) =>
  values.includes(newValue) ? values : [...values, newValue];

export { updateTracker, discardDuplicates, updateCounter };
