class Ship {
  constructor() {
    this.pos = new Vector(100, 100);
    this.w = 40;
    this.h = 40;
    this.lifes = 3;
    this.shoots = [];
  }

  draw() {
    this.update();
    fill(255);
    strokeWeight(5);
    stroke(0, 0, 255);
    rect(this.pos.x, this.pos.y, this.w, this.h);

    this.move();
  }

  center() {
    return new Vector(this.pos.x - this.w / 2, this.pos.y - this.h / 2);
  }

  move() {
    this.pos = new Vector(mouseX - this.w / 2, mouseY - this.h / 2);
  }

  fire() {
    this.shoots.push(
      new Shoot(new Vector(this.pos.x + this.w, this.pos.y + 15))
    );
  }

  update() {
    onkeyup = () => {
      if (keyCode === 32) {
        this.fire();
      }
    };

    this.shoots.forEach(shoot => {
      shoot.draw();

      if (shoot.pos.x > WIDTH) {
        this.shoots.splice(this.shoots.indexOf(shoot), 1);
      }
    });
  }
}
