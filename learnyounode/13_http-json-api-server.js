/*

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:

{
  "hour": 14,
  "minute": 23,
  "second": 15
}

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.

For example:

{ "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to
your program.

*/

const http = require('http');
const path = require('path');
const url = require('url');

const port = parseInt(process.argv[2]);

const server = http.createServer((request, response) => {
  if (request.method == 'GET') {
    const parsedUrl = url.parse(request.url, true);
    const dateFormat = path.basename(parsedUrl.pathname);
    const dateQuery = parsedUrl.query.iso;
    const date = new Date(dateQuery);
    const dateObj = {};

    switch(dateFormat) {
      case 'parsetime':
        dateObj.hour = date.getHours();
        dateObj.minute = date.getMinutes();
        dateObj.second = date.getSeconds();
        break;
      case 'unixtime':
        dateObj.unixtime = date.getTime();
        break;
      default:
        console.log('Unsupported date format.');
    }

    response.writeHead(200, {'Content-Type': 'application/json'})

    response.end(JSON.stringify(dateObj));
  }
});

server.listen(port);
