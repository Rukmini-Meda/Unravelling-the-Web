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