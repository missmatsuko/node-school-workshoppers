//  This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

const http = require('http');
const argsStartIndex = 2;
const urls = process.argv.slice(argsStartIndex);
const requests = urls.map((url) => {
  return {
    url,
    content: '',
  };
});
const numRequests = requests.length;
let numRequestsDone = 0;

urls.forEach((url) => {
  http.get(url, (response) => {
    let fullData = '';

    response.setEncoding('utf8').on("data", (data) => {
      fullData += data;
    });

    response.on("end", () => {
      numRequestsDone++;

      const requestsDone = numRequests == numRequestsDone;

      // update requests
      const requestIndex = requests.findIndex(element => element.url == url);
      requests[requestIndex].content = fullData;

      // if requests all have content, output its content
      if(requestsDone) {
        requests.forEach((request) => {
          console.log(request.content);
        });
      }
    });
  });
});
