// For an alert dialog
alert("Hey!!");
// JS code works fine even without semicolon. But sometimes you get errors
// in large codebases. Hence, its better to add semicolon at the end of the code line.

// You can print values in the console
// You can even run small snippets of code in the console of the browser
console.log(1);

// Variable declaration and initialization
let age = 20;
let year = 2019;
// Outputs both the values
console.log(age, year);
age = 30;
console.log(age);
const me = "I don't change";
console.log(me);

// Throws error in browser console
// me = "I do change";

// Older way to create variables before let and const
// In modern js, we use let and const
// But what really is the difference? Find out!
// There can't be spaces in the name of the variable, use camelCase
// Variables can start with _ or $ but not with a number
// Reserved keywords can't be used for variables like const
// And finally name should be meaningful
// Also write good comments
/*Multi line comment */
/** JSDoc comment */
var score = 75;
console.log(score);

// When we use let and const dont work with older versions of chrome
// It's better to use chrome to use modern js, we can use babel to support older version which we will look at later.
// JS Data Types
//1. Number (1,2,3,100,3,14), 2. String ('hello', "hello")
// 3. Boolean true/false, 4.Null (explicitly set a variable with no value)
// 4. Undefined (Default empty value given by browser)
// 5. Object - complex data structures - arrays, dates, literals
// 6. Symbol - used with objects - will be discussed later

// We can override the type of the number
// Strings
console.log('This is string too unlike C');
let email = "email@email.com";
console.log(email);
let firstName = "Brandon";
let lastName = "Sanderson";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Indexing starts with zero in JS
console.log(fullName[0]);
// Length of a string - a property
console.log(fullName.length);
// to uppercase
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
// These methods dont alter fullname variable or the variable they are called on
// But some methods do alter

// Finds the index of a character in a string
// pass the character as arguments in the form of string
let index = email.indexOf('@');
console.log(index);
// Last index of appearance of a character
result = email.lastIndexOf('n');
console.log(result);
// Slice a section of a string
// slice(from where do we slice, till where we slice)
result = email.slice(0,10);
console.log(result);
// Same as slice, but from where and how many characters
result = email.substr(0,10);
console.log(result);
// Finds the first m and replaces it with w
result = email.replace('m','w');
console.log(result);
let radius = 10;
const pi = 3.14;
console.log(radius, pi);
// Math operators +, -, *, /, **, %
// console.log(10 / 2);
// result = radius % 3;
// console.log(result);
// result = pi * radius ** 2;
// console.log(result);
// Order of operation - B I D M A S => Brackets, Indices or power, Division, Multiplication, Addition
// and subtraction
// result = 5 + (10 - 3)**2;
// console.log(result);
let likes = 10;
// likes ++;
// likes --;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 10;

// NaN -> Not a Number
console.log(5 / "hello");
console.log(5 * "hello");
result = "The blog has " + likes + " likes";
console.log(result);
// Template strings
// Inject variables into strings to concatenate together
// Normal concatenation
const tite = "Title", author = "Author", likes = 20;
result = "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);
// Template strings way
// Using back strokes, $ and {}
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>The blog has ${likes}</span>
`;
console.log(html);

let ninjas = ["Shaun", "Ryu", "Chun-li"];
console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = "ken";
console.log(ninjas[1]);
let ages = [20, 25, 30, 35];
console.log(ages[2]);
let random = ["Shaun","crystal",20,30];
// console.log(random);
console.log(ninjas.length);
// Array methods
// Joins all the array elements with a delimiter
result = ninjas.join(',');
result = ninjas.indexOf('Chun-li');
// Joins 2 arrays
result = ninjas.concat(random);
console.log(result);
// Pushes a new element and returns the length of the array
result = ninjas.push('ken');
console.log(result);
ninjas.pop();
// The above is a destructive method
// Find out about constructive methods
let age1;
console.log(age1, age1+3, `The age is ${age1}`);
// first value is undefined
// second value is NaN
// third value will have undefined in it
age1 = null;
console.log(age1, age1+3, `The age is ${age1}`);
// first value is null (interpreted as 0)
// second value is 3
// third value will have null in it
console.log(true, false, "true", "false");
email = "luigi@luigi.com";
// Whether a character is found in the string
result = email.includes('@');
console.log(result);
names = ['mario', 'neville', 'ron'];
result = names.includes('ron');
console.log(result);
age = 25;
console.log(age == 25);
console.log(age != 30);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name < 'shaun');
console.log(name > 'Shaun');
//lower case letters > upper case letters

let age = 25;
// Loose comparision, other types can be equal as well
console.log(age == 25);
// This evaluates true because of type conversion in the background
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');
// Strict comparision - there will be no type conversion in the background
//true
console.log(age === 25);
//false
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
//Most of the times, its better to use trict comparision
score = '100';
console.log(score + 1);
//output will be 1001
//type conversion
score = Number(score);
console.log(score + 1);
console.log(typeof score);

result = 'hello';
// The below gives NaN as output as its trying to convert something thats not meaningful when converted to a number
console.log(Number(result));
result = String(20);
result = Boolean(100);
console.log(result);
console.log(Boolean(0));
//positive and negative values are true and zero is called false value
//strings of any length are true, empty string is false
// these are explicit type conversion
// for loops
for(let i = 0; i < 5; i ++){
    console.log('This is happening for the ', i);
}
const arr = ['shaun', 'mario', 'luigi'];
for(let i = 0; i < arr.length; i ++){
    console.log(arr[i]);
    html = '<div>${names[i]}</div>';
    console.log(html);
}
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

