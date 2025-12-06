//  Task 1
 var name = "Mohammed";
  let age = 25;
  const country = "India";

  console.log(name, age, country);

//   Task 2

let x = 10;
//let x = 20;
  console.log(x);

//   Task 3

 console.log(myVar); // ❌ Error
  let myVar = "Hello TDZ";

// Task 4

 {
    let insideBlock = "Visible only inside block";
    console.log(insideBlock); // ✅ Works
  }
  // console.log(insideBlock); // ❌ Error: not defined outside block

// Task 5

  const car = { brand: "Toyota", color: "Red" };
  car.color = "Blue"; // ✅ Allowed (modifying property)
  console.log(car);

//  Task 6

 const userProfile = {
    name: "Mohammed",
    age: 25,
    hobby: "Coding"
  };

  userProfile.age = 26;
  userProfile.hobby = "Web Development";

  console.log(userProfile);

// Task 7

  let num1 = 10;
  let num2 = 5;
  let sum = num1 + num2;
  let product = num1 * num2;

  console.log("Sum:", sum);
  console.log("Product:", product);
