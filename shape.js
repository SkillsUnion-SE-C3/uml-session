class Shape {
  _circumference = 0
  static numShapes = 0

  constructor(c) {
    this._circumference = c
    Shape.numShapes++
  }

  getCircumference() {
    return this._circumference
  }

  setCircumference(circumference) {
    this._circumference = circumference
  }

  static getShapeCount() {
    return Shape.numShapes
  }
}

const x = new Shape()
