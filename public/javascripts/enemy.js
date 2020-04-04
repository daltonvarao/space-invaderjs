class Enemy {
  constructor() {
    const y = Math.floor(Math.random() * HEIGHT);
    const x = Math.floor(Math.random() * WIDTH); // + WIDTH * 1.25;

    this.radius = 20;
    this.speedx = 0;
    this.pos = new Vector(x, y);
    this.score = 10;
  }

  center() {
    return new Vector(this.pos.x + this.radius, this.pos.y + this.radius);
  }

  draw() {
    fill("lightgray");
    strokeWeight(0);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius, 1, 160, 200);

    this.move();
  }

  move() {
    this.pos.x -= this.speedx;
  }
}
