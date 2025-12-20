const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  getInfo() {
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
  }
};

book.getInfo();

const { title, author } = book;
console.log(title); 
console.log(author);

class Mobile {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  discount() {
    this.price -= this.price * 0.10;
    console.log(`Discounted price of ${this.brand}: ${this.price}`);
  }
}


const phone = new Mobile("Samsung", 20000);
phone.discount();