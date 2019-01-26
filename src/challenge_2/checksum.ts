import { MathReducers } from '../lib/array_operations';
import { countRepetitions } from './repetitions';
const { multiply } = MathReducers;

/** Generates a checksum by counting specific duplicates and multiplying the values. */
export const checksum = (data: string[]): number => {
  const counter = countRepetitions(data, [2, 3]);
  const values = Object.values(counter);

  return multiply(values);
};
