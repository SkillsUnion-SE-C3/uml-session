// Exercise: 

// Use https://app.diagrams.net/ 
// to create a Class Diagram for Product class

class Product {
  #price
  static products = []

  constructor(name, price) {
    this.#price = price
    this.name = name

    Product.products = [...Product.products, { name: name, price: price }]
  }

  changeName(newName) {
    this.name = newName
  }

  getPrice() {
    return this.#price
  }

  static getStringifiedProducts() {
    return JSON.stringify(Product.products)
  }
}