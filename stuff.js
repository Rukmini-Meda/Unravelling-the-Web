var counter = function(arr){
    return "There are " + arr.length + " elements in this array.";
};

// ES6 -> `` is a template string
var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
};

// Can also be exported as module.exports.pi = 3.142
var pi = 3.142;

// This will allow the required parts or functions of this module to be available or exported to all files
// module.exports = counter;

//module.exports is just an object, so you can add properties to it to export multiple methods or properties
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};