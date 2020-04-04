const waves = document.querySelectorAll(".waves");
const life = document.querySelector("#lifes");
const message = document.querySelector("#message");
const scores = document.querySelectorAll(".score");

class Game {
  constructor() {
    this.enemies = new Enemies();
    this.ship = new Ship();
    this.running = true;
    this.enemyNum = 20;
    this.wave = 1;
    this.message = "";
    this.score = 0;

    this.genEnemies();
  }

  endWave() {
    this.wave += 1;
    this.enemyNum += 5;
    this.message = "Level UP!";
  }

  nextWave() {
    this.genEnemies();
  }

  update() {
    if (this.notIsOver()) {
      if (this.enemies.length() === 0) {
        this.endWave();
        this.nextWave();
      }

      this.enemies.data.forEach(enemy => {
        this.ship.shoots.forEach(shoot => {
          const distance = shoot.center().distanceTo(enemy.pos);
          if (distance <= enemy.radius * 0.8) {
            this.ship.shoots.splice(this.ship.shoots.indexOf(shoot), 1);
            this.enemies.kill(enemy);
            this.score += enemy.score;
          }
        });

        const distanceToShip = enemy.center().distanceTo(this.ship.center());

        if (distanceToShip <= enemy.radius + this.ship.w * 0.2) {
          console.log("colidiu");
        }

        if (enemy.pos.x <= 0) {
          this.ship.lifes -= 1;
          this.enemies.kill(enemy);
        }
      });

      this.draw();
    }

    if (this.ship.lifes <= 0) {
      this.over();
    }
  }

  genEnemies() {
    for (let i = 0; i < this.enemyNum; i++) {
      this.enemies.push(new Enemy());
    }
  }

  notIsOver() {
    if (this.running) {
      document.querySelector("#game-over").classList.add("hide");
    }
    return this.running;
  }

  over() {
    this.running = false;
    document.querySelector("#game-over").classList.remove("hide");
  }

  draw() {
    this.ship.draw();
    this.enemies.draw();

    life.innerHTML = this.ship.lifes;
    message.innerHTML = this.message;

    waves.forEach(wave => {
      wave.innerHTML = this.wave;
    });

    scores.forEach(score => {
      score.innerHTML = this.score;
    });
  }
}
