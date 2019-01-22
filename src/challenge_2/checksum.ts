import { multiply } from '../lib/array_operations';
import { countDuplicates } from './reducers/duplicates';

/** Generates a checksum by counting specific duplicates and multiplying the values. */
export const checksum = (data: string[]): number => {
  const counter = countDuplicates(data, [2, 3]);
  const values = Object.values(counter);
  return multiply(values);
};
