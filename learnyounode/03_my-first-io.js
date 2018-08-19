// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.

const fs = require('fs'); // import the the filesystem/fs module from the Node core library
const filePath = process.argv[2];
const fileContentBuffer = fs.readFileSync(filePath); // returns a Buffer object containing the complete contents of the file

// Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().
const fileContentString = fileContentBuffer.toString();

// If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScript String can be .split() into an array of substrings and that '\n' can be used as a delimiter. Note that the test file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.
const numberOfNewLines = fileContentString.split('\n').length - 1;

console.log(numberOfNewLines);
