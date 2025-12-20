//Example 9

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

products.forEach(({ name, price }) => {
  console.log(`${name} costs ₹${price}`);
});


//Example 10

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  getDetails() {
    return `${this.name} is in grade ${this.grade}`;
  }
}

class StudentManagementSystem {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
    console.log(`${student.name} added successfully.`);
  }

  listStudents() {
    this.students.forEach(s => console.log(s.getDetails()));
  }
}

// Example
const sms = new StudentManagementSystem();
const student1 = new Student("Ali", 10);
const student2 = new Student("Sara", 12);

sms.addStudent(student1);
sms.addStudent(student2);
sms.listStudents();