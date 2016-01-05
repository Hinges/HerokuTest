/**
 * Created by Hinge on 1/5/16.
 */

var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200);
    response.write('hello world');
    response.end();
}).listen(process.env.PORT || 3000);


console.log('Running on port 3000!');