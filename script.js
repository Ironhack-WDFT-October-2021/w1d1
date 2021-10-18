// hello world javascript
// console.log('hello world');

// you can do more things with console
// window.console.table([1, 2, 3])

/*
this is a multiline comment
*/

// variables

// declaring a variable
let client;

// assign a value too the variable
client = 'Mr Smith';
client = 'Mr Miller';
// initializing a variable (giving it it's first value)
let mouse = 'jerry';

// declare more variables in one line
// let cat, dog;

// let dog;
// let cat;

// console.log(client);

// const cannot be reassigned
// we use const whenever possible
const user = 'Stephen';
// user = 'Rahaf'; ❌
// console.log(user);

// naming - use camelCase 
const userName = 'Foo';

// Data types

// there are primitive data types and objects
// primitives: number, string, boolean, null, undefined, Symbol

// js is dynamically typed
let num = 23;
console.log(typeof num);
num = 'foo';
console.log(typeof num);

console.clear();

// Number
const distance = 9000
const price = 19.99

// console.log('hello' * 3) // -> NaN

// mathematical operators

const sum = 3 + 6
console.log(sum)

console.clear();

// subtraction, division, multiplication
// - , / , *

// Modulo
// console.log(7 % 2) // -> 7/2 = 3 -> remainder: 1

let x = 0;
x = x + 1
x = x + 1
x += 1 // -> x = x + 1
// x -= 2; x *= 3
x++

console.log(x)
console.clear();

let y = 1;
console.log(y++); // this logs 1 first and then increments
console.log(y);

// Strings - a sequence of characters
const greeting = 'hello';
const sentence = greeting + ' world';
// within backticks we can add a variable within ${}
const templateString = `${greeting} world`

console.log(sentence)

// string properties and methods 
// <String>.length -> num of characters in that string
console.log(sentence.length);
console.log('abc'.length);

// accessing characters of a string
const str = 'world';
// use the bracket notation
console.log(str[1])
// use charAt
console.log(str.charAt(0));

// get the last char of a string
console.log(str.charAt(str.length - 1))

// get the index of a specific char
// indexOf returns the index of a char 
const index = str.indexOf('d');
console.log(index)
// you could also use lastIndexOf()

// slice()
// slice returns a substring from a string within a given range

// const str = 'world';
console.log(str.slice());

console.clear();

let username = 'alice';
// toUpperCase() turns a string to uppercase
console.log(username.toUpperCase());
// strings are immutable -> they have to be reassigned
username = username.toUpperCase();
console.log(username);

// 
const upperCased = username.charAt(0).toUpperCase() + username.slice(1)
console.log(upperCased) // -> 'Alice'

// boolean, undefined and null

// undefined is the unintentional absence of a value
// null is the intentional absence of a value

// boolean value is either true or false

// boolean expression results in either true or false

console.log(5 < 3)

// > | >=
// < | <=

// equality operator
// === strictly equal -> also the data type has to match
console.log(5 === '5')
console.clear();
// logical operators
// logical and &&
// logical or ||
const number = 8;
// check if the number is larger than 12 and even

if (number > 10 || number % 2 === 0) {
	console.log('yes it is')
}

// conditionals and loops

// const age = Number(prompt('what is your age?'));
// console.log(typeof age)
// if (age > 18) {
// 	console.log('you are allowd to drive')
// } else if (age === 17) {
// 	console.log('you can drive with an adult');
// } else {
// 	console.log('you are too young to drive');
// }

// if (5 > 7) {
// 	console.log('this is true')
// } else {
// 	console.log('this is false')
// }

// truthy and falsy values
// falsy values: '', undefined, null, 0, NaN 
let passwrd = 'jfdk';
if (passwrd) {
	console.log('password is set');
} else {
	console.log('password is not set yet')
}


// const list = {
// 	french: 'bonjour',
// 	english: 'hello',
// 	german: 'guten tag'
// }
// switch case
// const language = prompt('which is your mother tongue?')
// switch (language) {
// 	case 'french':
// 		console.log('bonjour');
// 		break;
// 	case 'english':
// 		console.log('hey dude');
// 		break;
// 	default:
// 		console.log('non recognized language');
// }

// iterations
// for loop 
// log the numbers 1 to 10
// for (let i = 1; i < 11; i++) {
// 	console.log(i);
// }

// same logic with a while loop
// let counter = 1;
// while (counter < 11) {
// 	console.log(counter);
// 	counter++;
// }

// console.log(!true)

// let password;
// while (password !== '123') {
// 	password = prompt('enter your password');
// }
// // if we reach this line the password is correct
// alert('password is correct 🦄')

