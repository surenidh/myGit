var fs = require('fs');

fs.readFile('mytext.txt', function(err, data){
    console.log("sync data is : " + data.toString());
});

var data = fs.readFileSync('mytext.txt');
console.log('Sync data is : ' + data.toString());
console.log("this is end");