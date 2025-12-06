// Task 1

function sayGoodMorning() {
    console.log("Good Morning");
  }

  sayGoodMorning();

// Task 2

function printSum(a, b) {
    console.log("Sum:", a + b);
  }

  printSum(5, 7);

// Task 3

  function square(num) {
    return num * num;
  }

  console.log("Square:", square(6));

// Task 4

  const multiply = (x, y) => x * y;

  console.log("Product:", multiply(4, 5));

// Task 5

function greet(name = "Student") {
    console.log("Hello, " + name);
  }

  greet();  
  greet("Mohammed");

// Task 6

 function add(a, b) { return a + b; }
  function subtract(a, b) { return a - b; }
  function multiply(a, b) { return a * b; }
  function divide(a, b) { return a / b; }

  console.log("Add:", add(10, 5));
  console.log("Subtract:", subtract(10, 5));
  console.log("Multiply:", multiply(10, 5));
  console.log("Divide:", divide(10, 5));

// Task 7

  function welcome(name) {
    return "Welcome, " + name + "!";
  }

  console.log(welcome("Mohammed"));

// Task 8

 function checkGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 60) return "C";
    else if (marks >= 40) return "D";
    else return "F";
  }

  console.log("Grade:", checkGrade(82));

// Task 9

function rectangleArea(length, width) {
    return length * width;
  }

  console.log("Area:", rectangleArea(10, 5));

// Task 10

 function login(username, password) {
    const correctUser = "admin";
    const correctPass = "1234";

    if (username === correctUser && password === correctPass) {
      return "Login Successful";
    } else {
      return "Try Again";
    }
  }

  console.log(login("admin", "1234")); 
  console.log(login("user", "0000"));  
