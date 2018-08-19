// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
  // the response object is a Node Stream object. You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end".
  response.setEncoding('utf8').on("data", (data) => {
    console.log(data);
  });
});
