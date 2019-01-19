const parseInput = (input: string): string[] =>
  input.split(/\n|\s/).filter(val => val !== '');

export default parseInput;
