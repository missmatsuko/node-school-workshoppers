// Write an HTTP server that serves the same text file for each request it receives.

// Your server should listen on the port provided by the first argument to your program.

// You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

const fs = require('fs');
const http = require('http');
const port = parseInt(process.argv[2]);
const filePath = process.argv[3];

// Both request and response are also Node streams! Which means that you can use the streaming abstractions to send and receive data if they suit your use-case.
const server = http.createServer((request, response) => {
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port);
