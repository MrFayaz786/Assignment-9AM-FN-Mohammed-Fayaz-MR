//Task 1

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);

//Task 2

let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");  
fruits.pop();            
fruits.unshift("Grapes");
fruits.shift();          
console.log(fruits);

//Task 3

let numbers = [10, 20, 30, 40, 50];
numbers.forEach(num => console.log(num));

//Task 4

let squared = numbers.map(num => num * num);
console.log(squared);

//Task 5

let greaterThan50 = squared.filter(num => num > 50);
console.log(greaterThan50);

//Task 6

let nums = [10, 20, 30, 40];
let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Total:", total);

//Task 7

let ages = [12, 17, 18, 20, 25];
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);

//Task 8

let students = [
  ["Ali", 85],
  ["Sara", 92],
  ["John", 78]
];

students.forEach(student => {
  console.log(`Name: ${student[0]}, Marks: ${student[1]}`);
});

//Task 9

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


let combined1 = arr1.concat(arr2);


let combined2 = [...arr1, ...arr2];

console.log(combined1);
console.log(combined2);
