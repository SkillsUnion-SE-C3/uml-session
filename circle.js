// Exercise:

// Inspect "implement-circle.png" 
// Define circle class based on the class diagram
// Only modify this file

class Circle extends Shape {
  #diameter

  static numCircles = 0

  constructor() {
    super()
    Circle.numCircles++
  }

  getDiameter() {
    return this.#diameter
  }

  setDiameter(diameter) {
    this.#diameter = diameter
  }

  static getCircleCount() {
    return Circle.numCircles
  }
}

const newCircle = new Circle()
newCircle.setDiameter(42)