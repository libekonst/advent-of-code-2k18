/** Splits concatenated string input into a `string[]` by linebreak and space. */
const parseInput = (input: string) => input.split(/\n|\s/).filter(val => val !== '');

export default parseInput;
