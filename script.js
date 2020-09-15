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

//  function addFourAges(a, b, c, d) {
//    return a + b + c + d;
//  };

//  //ES5
//  var ages = [18, 30, 12, 21];

//  var sum1 = addFourAges.apply(null, ages);
//  console.log(sum1);

//  //ES6
//  let sum2 = addFourAges(...ages);
//  console.log(sum2);

// const fam1 = ['John', 'Jane', 'Mark'];
// const fam2 = ['Caleb', 'Lindsay', 'Sarah'];
// const bigFam = [...fam1, ...fam2, 'Grant', 'Lisa'];
// console.log(bigFam);


// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color = 'purple');


/*************************
 * Rest Parameters
 */

//  //ES5
//  function isFullAge5() {
//    var argsArr = Array.prototype.slice.call(arguments);
//    argsArr.forEach(function(cur) {
//      console.log(2020 - cur >= 18);
//    });
//  };

// //  isFullAge5(1990, 2007, 1965);

//  //ES6
//  function isFullAge6(limit, ...years) {
//    years.forEach(cur => console.log(2020 - cur >= limit));
//  };

//  isFullAge6(18, 1990, 2007, 1965);

//  let years6 = [1990, 2009, 2007, 1965, 2010, 1989];
//  isFullAge6(18, ...years6);

// isFullAge6(16, 1990, 2015, 1989);


/*************************
 * Default Parameters
 */

// //ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? lastName = 'Smith' : lastName =lastName;
//   nationality === undefined ? nationality = 'american' : nationality = nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;   
//  }

//  var caleb = new SmithPerson('Caleb', 1989);
//  console.log(caleb);
//  var jane = new SmithPerson('Jane', 1997, 'Williams', 'Spanish')
//  console.log(jane);

//  //ES6
//  function PollardPerson(firstName, yearOfBirth, lastName = 'Pollard', nationality = 'Chillian') {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality; 
//  }

//  let josh = new PollardPerson('Josh', 2023);
//  console.log(josh);
//  let captain = new PollardPerson('captain', 2025, 'Smith', 'american');
//  console.log(captain);

/***********************
 * Maps
 */

//  const question = new Map();
//  question.set('question', 'What is the official name of the lasted major JavaScript version?')
//  question.set(1, 'ES5');
//  question.set(2, 'ES6');
//  question.set(3, 'ES2015');
//  question.set(4, 'ES7');
//  question.set('correct', 3);
//  question.set(true, 'That\'s correct, congrats!! :)')
//  question.set(false, 'Wrong, you need practice');

//  console.log(question.get('question'));

/*
  console.log(question.size);

 if (question.has(4)) {
   question.delete(4);
   console.log('question 4 is here');
 }

 question.clear();

question.forEach((value, key) => console.log(`This is ${key} and it's value is set to ${value}`));
*/

// for (let [key, value] of question.entries()) {
//   if (typeof(key) === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// };

// const userAnswer = parseInt(prompt('Select the correct answer'));

// console.log(question.get(userAnswer === question.get('correct')));

/*********************
 * Classes ES5 vs ES6
 */

//  //ES5
//  var Person5 = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;   
//  };

//  Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }

// var johnAthelete5 = new Athlete5('John', 1989, 'swimmer', 3, 10);

// johnAthelete5.calculateAge();
// johnAthelete5.wonMedal();

// //ES6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   };

//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   };
// };

// class Athelete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super (name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   };
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   };
// };

// const johnAthelete6 = new Athelete6('Jonn', 1989, 'swimmer', 3, 10);

// johnAthelete6.calculateAge();
// johnAthelete6.wonMedal();

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Town {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  };
};

class Park extends Town {
  constructor(name, buildYear, treeTotal, sqftArea) {
    super(name, buildYear);
    this.treeTotal = treeTotal;
    this.sqftArea = sqftArea;
  }

  calcAge() {
    this.age = new Date().getFullYear() - this.buildYear;
    return this.age;
  };

  calcTreeDensity() {
    this.treeDensity = this.treeTotal / this.sqftArea;
    return this.treeDensity;
  };
}

class Street extends Town {
  constructor(name, buildYear, size = 'normal', length) {
    super(name, buildYear);
    this.size = size;
    this.length = length;
  }
}

//Create Parks
const greenPark = new Park('Green Park', 1975, 4500, 4000);
const nationalPark = new Park('National Park', 1998, 750, 950);
const oakPark = new Park('Oak Park', 2008, 300, 425);

const parkTrees = new Map();
parkTrees.set(greenPark.treeTotal, greenPark.name);
parkTrees.set(nationalPark.treeTotal, nationalPark.name);
parkTrees.set(oakPark.treeTotal, oakPark.name);

const parkAges = new Map();
parkAges.set('greenPark', greenPark.calcAge());
parkAges.set('nationalPark', nationalPark.calcAge());
parkAges.set('oakPark', oakPark.calcAge());

//Create Streets
//tiny (1-5)/small (6-10)/normal (11-15)/big (16-20)/huge (21 +)
const oceanAve = new Street('Ocean Ave', 2003, 'small', 7);
const evergreenSt = new Street('Evergreen Street', 2001, 'big', 18);
const fourthSt = new Street('4th Street', 1989, undefined, 12);
const sunsetBlvd = new Street('Sunset Boulevard', 1968, 'tiny', 2);

const streetLengths = new Map();
streetLengths.set(oceanAve.name, oceanAve.length);
streetLengths.set(evergreenSt.name, evergreenSt.length);
streetLengths.set(fourthSt.name, fourthSt.length);
streetLengths.set(sunsetBlvd.name, sunsetBlvd.length);

const streetMap = new Map();
streetMap.set(oceanAve.name, oceanAve);
streetMap.set(evergreenSt.name, evergreenSt);
streetMap.set(fourthSt.name, fourthSt);
streetMap.set(sunsetBlvd.name, sunsetBlvd);

//Park and tree calculations
let avgParkAge = (greenPark.age + nationalPark.age + oakPark.age) / parkAges.size;

let parkKiloTrees;

for (const [key, value] of parkTrees) {
  if (key >= 1000) {
    parkKiloTrees = value;
  };
};

//Street Calculations
let streetLengthsTotal = 0;
let streetAvg;

streetLengths.forEach(value => streetLengthsTotal += value)
streetAvg = streetLengthsTotal / streetLengths.size;


//Print to console

/**
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
 */

let parksReport, streetsReport;
parksReport = '----PARKS REPORT-----';
streetsReport = '----STREETS REPORT-----';

console.log(parksReport);
console.log(`Our 3 parks have an average age of ${avgParkAge} years`);
console.log(`${greenPark.name} has a tree density of ${greenPark.calcTreeDensity()} per square foot`);
console.log(`${nationalPark.name} has a tree density of ${nationalPark.calcTreeDensity()} per square foot`);
console.log(`${oakPark.name} has a tree density of ${oakPark.calcTreeDensity()} per square foot`);
console.log(`${parkKiloTrees} has more than 1000 trees`);

console.log(streetsReport);
console.log(`Our 4 streets have a total length of ${streetLengthsTotal} miles with an average of ${streetAvg} miles per street`);
for (const [key, value] of streetMap) {
  console.log(`${key}, built in ${value.buildYear}, is a ${value.size} street.`);
};