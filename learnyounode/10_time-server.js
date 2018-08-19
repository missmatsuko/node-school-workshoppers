/*

  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.

*/

const net = require('net');
const port = process.argv[2];

const zeroFill = function(num) {
  if(num < 10) {
    return `0${num}`;
  }
  return num;
}

// The net module has a method named net.createServer() that takes a function. The function that you need to pass to net.createServer() is a connection listener that is called more than once. Every connection received by your server triggers another call to the listener.

// net.createServer() also returns an instance of your server. You must call server.listen(portNumber) to start listening on a particular port.
const server = net.createServer((socket) => {
  // The socket object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to. For this exercise we only need to write data and then close the socket.

  // Use socket.write(data) to write data to the socket and socket.end() to close the socket. Alternatively, the .end() method also takes a data object so you can simplify to just: socket.end(data).

  const date = new Date();

  // date.getMonth() starts at 0, so have to add 1
  const formattedDate = `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}\n`;
  socket.write(formattedDate);
  socket.end();
});

server.listen(port);
