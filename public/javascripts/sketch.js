let game = new Game();
const playAgainBtn = document.querySelector("#play-again");

setInterval(function() {
  if (game.message) {
    game.message = "";
  }
}, 5000);

playAgainBtn.addEventListener("click", () => {
  game = new Game();
});

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(0);
  game.update();
}
