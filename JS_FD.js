/* Debugging */

//1
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);
let sumAB = a + b;
console.log(sumAB);

//2
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

//3
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

//4
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//5
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//6
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//7
let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//8
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine();
console.log(result);

//9
function raiseToPower(base, exp) {
  return Math.pow(base, exp);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//10
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//11
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//12
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

/* Basic Algorithm Scripting */

//1
function convertCtoF(celsius) {
  let fahrenheit = Math.ceil((9 / 5) * celsius + 32);
  return fahrenheit;
}

convertCtoF(0);
convertCtoF(-30);
convertCtoF(-10);
convertCtoF(20);
convertCtoF(30);
convertCtoF(30);

//2
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
console.log(reverseString("hello"));

reverseString("Howdy");
console.log(reverseString("Howdy"));

reverseString("Greetings from Earth");
console.log(reverseString("Greetings from Earth"));

//3
function factorialize(num) {
  var cnt = 1;
  for (var i = 1; i <= num; i++) {
    cnt *= i;
  }
  return cnt;
}

factorialize(0);
console.log(factorialize(0));
factorialize(5);
console.log(factorialize(5));
factorialize(20);
console.log(factorialize(20));
