//Task 1

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    const discount = this.price * (discountPercent / 100);
    return this.price - discount;
  }
}

const laptop = new Product("Laptop", 50000);
console.log(`Discounted Price: ₹${laptop.discountedPrice(10)}`); 

//Task 2

const user = {
  name: "Mohammed",
  login() {
    console.log(`${this.name} logged in`);
  },
  logout() {
    console.log(`${this.name} logged out`);
  }
};

user.login();
user.logout();

//Task 3

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  display() {
    console.log(`${this.name} is in grade ${this.grade}`);
  }
}

const student1 = new Student("Ali", 10);
const student2 = new Student("Sara", 12);
const student3 = new Student("John", 9);

student1.display();
student2.display();
student3.display();

//Task 4

class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(`Area of ${circle.name}: ${circle.area().toFixed(2)}`);

//Task 5

Student.prototype.greet = function() {
  console.log(`Hello, I am ${this.name} from grade ${this.grade}`);
};


student1.greet();
student2.greet();
student3.greet();