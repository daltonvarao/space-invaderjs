class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(v1) {
    return Math.sqrt((v1.x - this.x) ** 2 + (v1.y - this.y) ** 2);
  }

  magnitude() {
    return Math.sqrt((this.x + this.y) ** 2);
  }

  normalize() {
    return new Vector(this.x / this.magnitude(), this.y / this.magnitude());
  }
}
