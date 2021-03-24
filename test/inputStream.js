var fs = require('fs');
var readableStream = fs.createReadStream('mytext.txt');
var data = "";
readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunk){
    data =data + chunk;
});

readableStream.on('end',function(){
    console.log(data);
});