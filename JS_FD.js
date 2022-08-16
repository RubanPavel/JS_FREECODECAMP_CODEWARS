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
