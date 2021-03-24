

function printStuff(){
    console.log("set time out");
    console.log(__filename);
console.log(__dirname);
}

setTimeout(printStuff,3000);
setInterval(printStuff,2000);
