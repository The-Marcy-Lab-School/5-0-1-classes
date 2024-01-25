class FoodItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

const apple = new FoodItem('apple', 1, 3);
const banana = new FoodItem('banana', 0.25, 6);
const cheese = new FoodItem('cheese', 7, 1);

console.log(apple.getTotalPrice(), banana.getTotalPrice(), cheese.getTotalPrice())

console.log(cheese.getTotalPrice === apple.getTotalPrice)
console.log(apple);
