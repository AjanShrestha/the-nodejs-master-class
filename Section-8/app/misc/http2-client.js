/**
 * Example HTTP2 Client
 * 
 */

// Dependencies
const http2 = require('http2');

// Create client
const client = http2.connect('http://localhost:6000');

// create a request
const req = client.request({
  path: '/'
});

// When a message is received, add the pieces of it together until you reach the end
let str = '';
req.once('data', function (chunk) {
  str += chunk;
});

// When a message ends, log it out
req.on('end', function () {
  console.log(str);
});

// End the request
req.end();