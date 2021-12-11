class Triangle extends Shape {
  static count = 0

  constructor(circumference, sides) {
    super(circumference)
    this.sides = sides
    Triangle.count++
  }
}