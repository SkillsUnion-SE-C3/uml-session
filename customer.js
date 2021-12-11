class Customer {
  #mostRecentPurchace

  constructor(name, balance) {
    this.name = name
    this.balance = balance
    this.#mostRecentPurchace = null
  }

  makePurchace(product) {
    this.balance = this.balance - product.getPrice()
    this.#mostRecentPurchace = product.name
  }
}

const newCustomer = new Customer()
