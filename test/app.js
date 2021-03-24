

function sayHello(anotherFun, value){
    anotherFun(value);
}

sayHello(function(name) {
    console.log("My Name is : " + name);
},"maduri");