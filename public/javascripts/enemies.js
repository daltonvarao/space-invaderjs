class Enemies {
  constructor() {
    this.data = [];
  }

  push(enemy) {
    this.data.push(enemy);
  }

  draw() {
    this.data.forEach(enemyOne => {
      enemyOne.draw();
    });
    // this.data.forEach(function(enemyTwo) {});
  }

  length() {
    return this.data.length;
  }

  kill(enemy) {
    this.data.splice(this.data.indexOf(enemy), 1);
  }
}
