class Shoot {
  constructor(pos) {
    this.speedX = 10;
    this.w = 14;
    this.h = 10;

    this.pos = pos;
  }

  center() {
    return new Vector(this.pos.x + this.w / 2, this.pos.y + this.h / 2);
  }

  draw() {
    fill(255, 255, 0);
    strokeWeight(0);
    rect(this.pos.x, this.pos.y, this.w, this.h);

    this.move();
  }

  move() {
    this.pos.x += this.speedX;
  }
}
