var http = require('http');
const server = http.createServer();
server.on('request', (request,response) =>{
    console.log("server started");
}).listen(8080);