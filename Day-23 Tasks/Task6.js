class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in with email ${this.email}`);
  }
}

const user1 = new User("Mohammed", "mohammed@example.com");
user1.login();