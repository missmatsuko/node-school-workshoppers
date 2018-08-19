// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

const fs = require('fs');
const filePath = process.argv[2];

// Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument.

// As with readFileSync(), you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of a Buffer
fs.readFile(filePath, 'utf8', (err, data) => {
  if(!err) {
    return console.log(data.split('\n').length - 1);
  }
});
