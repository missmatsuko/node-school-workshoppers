// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

const argsStartIndex = 2; // The first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2)
const args = process.argv.slice(argsStartIndex);
// all elements of process.argv are strings and you may need to coerce them into numbers
const result = args.map((input) => parseInt(input)).reduce(((accumulator, currentValue) =>  accumulator + currentValue), 0);

console.log(result);
