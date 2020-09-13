/*****************
 * Lecuture: Strings
 */

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1989;

// function calcAge(year) {
//   return 2020 - year;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(3));


/***************'
 * Arrow Functions
 */

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function (el) {
//   return 2016 - el;
// });
// console.log(ages5);

// // ES 6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}.`;
// });
// console.log(ages6);


/****************
 * Arrow Functions 2
 */

// // ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {

//     var self = this;
//     document.querySelector('.green').addEventListener('click', function () {
//       var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//       alert(str);
//     });
//   }
// }
// box5.clickMe();

// // ES6
// const box6 = {
//   color: 'blue',
//   position: 2,
//   clickMe: function () {
//     document.querySelector('.blue').addEventListener('click', () => {
//       var str = `This is box number ${this.position} and it is ${this.color}`;
//       alert(str);
//     });
//   }
// }
// box6.clickMe();


// function Person(name) {
//   this.name = name;
// }

// // ES5 Trick
// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map(function (el) {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));

//   console.log(arr);
// }
// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends);

// //ES6
// let mike = new Person('Mike');
// Person.prototype.myFriends6 = function (friends) {
//   let arr = friends.map(el => this.name + ' is friends with ' + el);

//   console.log(arr);
// }
// mike.myFriends6(friends);


/******************
 * Destructuring
 */

// // ES5
//  var john = ['John', 26];
//  var name = john[0];
//  var age = john[1];

// //ES6
// const [name, age] = ['John', 26];
// console.log(name, age);

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };

// const {
//   firstName,
//   lastName
// } = obj;
// console.log(firstName);
// console.log(lastName);

// const {
//   firstName: a,
//   lastName: b
// } = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
//   const age2 = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2, retirement);

/*******************
 * ES6 Arrays and Array Methods
 */

//  const boxes = document.querySelectorAll('.box');

//  //ES5
//  var boxesArr5 = Array.prototype.slice.call(boxes);

//  boxesArr5.forEach(function(cur) {
//    cur.style.backgroundColor = 'dodgerblue';
//  });
 
 
//  //ES6
// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach(cur => cur.style.backgroundColor = 'purple');

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES6 for of loop
// for (const cur of boxesArr6) {
//   if (cur.className === 'box blue') {
//     continue;
//   }
//   cur.textContent = 'I changed to blue';
// };

// //ES6 Even better way
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue';
// };

// //ES6 find and findIndex
// let ages = [16, 17, 12, 21, 11];

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

/*************************
 * Spread Operator in ES6
 */

 function addFourAges(a, b, c, d) {
   return a + b + c + d;
 };

 //ES5
 var ages = [18, 30, 12, 21];

 var sum1 = addFourAges.apply(null, ages);
 console.log(sum1);

 //ES6
 let sum2 = addFourAges(...ages);
 console.log(sum2);

const fam1 = ['John', 'Jane', 'Mark'];
const fam2 = ['Caleb', 'Lindsay', 'Sarah'];
const bigFam = [...fam1, ...fam2, 'Grant', 'Lisa'];
console.log(bigFam);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');