/**
 * Global Object -> Window object
 * 
 * Methods on it:
 * 1. console.log
 * 2. setTimeout
 * 3.setInterval
 * 
 * Properties:
 * 1.__dirname
 * 2.__filename
 * 
 * Also important topics - require, exports related to global object
 */

console.log("Hello world!");
setTimeout(function(){
    console.log("3 seconds have passed");
},3000);
var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + " second have passed");
    if(time > 5){
        clearInterval(timer);
    }
},2000);

console.log(__dirname);
console.log(__filename);

// Normal function statement

function sayHi(){
    console.log("Hi");
}

sayHi();

// Function expression

var sayBye = function(){
    console.log("Bye");
};

// The above is a function expression with an anonymous function assigned to a variable

sayBye();

// We can pass a function to another function and call that inside this

function callFunction(fun){
    fun();
}

callFunction(sayBye);