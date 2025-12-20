class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ${amount}. Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ${amount}. Balance: ${this.balance}`);
    }
  }
}

const account = new BankAccount("Mohammed", 1000);
account.deposit(500);
account.withdraw(200);