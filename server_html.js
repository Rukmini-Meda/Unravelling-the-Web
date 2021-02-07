var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    console.log("Request was made: ", request.url);
    response.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name: "Ryu",
        job: "Ninja",
        age: 29
    };
    // You cant just send myObj since we have to send a string or buffer, hence we serialize the object to send it
    response.end(JSON.stringify(myObj));
})

server.listen(3000,'127.0.0.1');
console.log("Now, listening at port 3000");