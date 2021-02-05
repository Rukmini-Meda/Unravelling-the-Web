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

// require is a method on the global object, so we can use anywhere

var stuff = require('./stuff');

console.log(stuff.counter(["Rukmini","Priya","Mary"]));
console.log(stuff.adder(98,stuff.pi));
console.log(stuff.pi);

var events = require("events");
const { element } = require('prop-types');

// One of the properties stored in the events module is event emitter

// Like an event in JQUery as follows which fires a function on click
// element.on('click',function(){});

var myEmitter = new events.EventEmitter();

// Now we can wire up events like this

myEmitter.on('someEvent',function(message){
    console.log(message);
});

// We are emitting this event to fire that function
myEmitter.emit('someEvent',"The event is emitted");

// The other useful module is util module short for utilities

var util = require("util");

var Person = function(name){
    this.name = name;
};

// The Person property will be inheriting events.EventEmitter to possess its properites and methods
util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
// List of objects
var people = [james, mary, ryu];

// Calling a function on each object of the list using forEach iterator
people.forEach(function(person){
    person.on('speak', function(message){
        console.log(person.name+" said: "+message);
    });
});

james.emit('speak','hey dude');
ryu.emit('speak',"I want to get this done!");

var fs = require('fs');
const { Console } = require('console');

// Reading and writing files

// This method is synchronous that means this fully reads the file before going on to the next pieces of code. This is the blocking code coz its blocking the next ones.
// utf8 is the character encoding which is rquired because when we read the file we read binary, so the encoding is required to convert thme into appropriate form
// var readme = fs.readFileSync('readme.txt', 'utf8');
// console.log(readme);

// fs.writeFileSync('writeme.txt', readme);

// bEcause this asynchronous, we need a callback function to call once this is done
// Callback functions are mandatory for both read and write asynchronous functions
// fs.readFile('readme.txt','utf8',function(err,data){
//     // console.log(data);
//     fs.writeFile('writeme.txt',data,()=>{});
// });

// To show the asynchronous nature of the above function
console.log('test');

// TO delete a file and make sure that the file exists because it throws an error if it does not exists
// This is also asynchronous, so be careful when you use write async function and this in the same program as it might not delete the file
// fs.unlink('writeme.txt',()=>{
//     console.log("Deleted");
// });

// Synchronous way to create a directory
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// We usually prefer asyn way of doing things in real life projects

fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writeme.txt',data,()=>{
            console.log("Done!");
        });
    })
})

// Can only remove empty directories else throws errors
// fs.rmdir('stuff', ()=>{});

// So, you can do like this
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff',()=>{
        console.log("Removed directory");
    });
})
