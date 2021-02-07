// var http = require('http');
var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200,{'Content-Type': 'text/plain'});
    // var myReadStream = fs.createReadStream(__dirname+'/index2.html','utf8');
    // var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');
    // myReadStream.pipe(response);
    response.end('I need popcorn');
});

server.listen(3000,'127.0.0.1');
console.log('Now listening to port 3000');

// // This will be show hey ninjas at 127.0.0.1:3000
// // This will be same for even 127.0.0.1:3000/*
// // We should make it differentiate through our code

// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');

// // // We are going to create a stream and read the file in chunks
// // // createReadStream inherits eventemitter which has an event called data

// // // This will listen for the data event and call the function then
// // // Here, each chunk is a buffer consisting some part of the data
// // myReadStream.on('data',function(chunk){
// //     console.log("New chunk received");
// //     console.log(chunk);
// // });

// // Writable Streams

// var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

// // myReadStream.on('data', function(chunk){
// //     console.log("New chunk received");
// //     myWriteStream.write(chunk);
// // });

// // You pipe from a readable stream to a writable stream not the other way around
// myReadStream.pipe(myWriteStream);
