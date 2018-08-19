// Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to your program.

const http = require('http');
const port = parseInt(process.argv[2]);

const server = http.createServer((request, response) => {
  if(request.method == 'POST') {

    // get the request body
    // REF: https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#request-body
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.write(body.toUpperCase());
    });
  }
});

server.listen(port);
