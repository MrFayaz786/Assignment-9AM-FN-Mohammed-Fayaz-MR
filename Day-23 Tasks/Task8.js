function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.drive = function() {
  console.log(`Driving a ${this.type}`);
};

function Car(brand) {
  Vehicle.call(this, "Car");
  this.brand = brand;
}
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function() {
  console.log(`${this.brand} says Beep Beep!`);
};

function ElectricCar(brand, battery) {
  Car.call(this, brand);
  this.battery = battery;
}
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.charge = function() {
  console.log(`${this.brand} is charging. Battery: ${this.battery}%`);
};

// Example
const tesla = new ElectricCar("Tesla", 80);
tesla.drive();
tesla.honk();
tesla.charge();