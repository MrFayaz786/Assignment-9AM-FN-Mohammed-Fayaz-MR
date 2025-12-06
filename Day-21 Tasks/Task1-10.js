//Task 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//Task 2

  let num = 2;
  while (num <= 10) {
    console.log(num);
    num += 2;
  }

// Task 3

 let x = 20;
  do {
    console.log("This runs at least once!");
  } while (x < 10);

// Task 4

  let fruits = ["Apple", "Banana", "Mango"];
  for (let fruit of fruits) {
    console.log(fruit);
  }

// Task 5

 let person = { name: "Mohammed", age: 25, hobby: "Coding" };
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }

// Task 6

    let number = 5;
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }

// Task 7

 let arr = [10, 20, 30, 40, 50];
  let searchValue = 30;

  for (let num of arr) {
    if (num === searchValue) {
      console.log("Found:", num);
    }
  }

// Task 8

    let correctPassword = "1234";
    let input;
    do {
      input = prompt("Enter password:");
    } while (input !== correctPassword);

    alert("Access Granted!");

// Task 9

 let prices = [100, 200, 300];
  let total = 0;

  for (let price of prices) {
    total += price;
  }

  console.log("Cart Total:", total);

// Task 10

  let students = {
    Mohammed: true,
    Ali: false,
    Sara: true
  };

  for (let name in students) {
    if (students[name]) {
      console.log(name + " is Present");
    } else {
      console.log(name + " is Absent");
    }
  }
