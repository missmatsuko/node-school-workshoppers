// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

// The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
  let fullData = '';

  // the response object is a Node Stream object. You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end".
  response.setEncoding('utf8').on("data", (data) => {
    fullData += data;
  });

  response.on("end", () => {
    const numChars = fullData.length;
    console.log(numChars);
    console.log(fullData);
  });
});
