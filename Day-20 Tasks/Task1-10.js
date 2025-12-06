// Task 1
  let str = "Hello";          
  let num = 42;               
  let bool = true;           
  let undef;                  
  let nul = null;            
  let sym = Symbol("id");     
  let big = 123456789012345678901234567890n; 

  console.log(str, num, bool, undef, nul, sym, big);

// Task 2

 console.log(typeof "Hello");
  console.log(typeof 42);     
  console.log(typeof true);   
  console.log(typeof undefined); 
  console.log(typeof null);    
  console.log(typeof Symbol("id")); 
  console.log(typeof 123n);    

// Task 3

 let person = {
    name: "Mohammed",
    age: 25,
    hobby: "Coding"
  };

  console.log(person.name, person.age, person.hobby);

// Task 4

  let strNum = "100";
  let converted = Number(strNum);
  console.log(converted, typeof converted); 

// Task 5

  let boolVal = false;
  let strBool = String(boolVal);
  console.log(strBool, typeof strBool);

// Task 6

  const student = {
    name: "Mohammed",
    age: 25,
    grade: "A"
  };

  console.log("Student Info:", student);

// Task 7

  let price = "200";
  let quantity = 3;  

  let total = Number(price) * quantity;
  console.log("Cart Total:", total);

// Task 8

  let isLoggedIn = true;

  if (isLoggedIn) {
    console.log("Welcome");
  } else {
    console.log("Please Login");
  }

// Task 9

  let big1 = 987654321987654321987654321n;
  let big2 = 123456789123456789123456789n;

  let sum = big1 + big2;
  console.log("BigInt Sum:", sum);

// Task 10

 const user1 = { id: Symbol("user1"), name: "Mohammed" };
  const user2 = { id: Symbol("user2"), name: "Ali" };
  const user3 = { id: Symbol("user3"), name: "Sara" };

  console.log(user1, user2, user3);