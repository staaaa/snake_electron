const player = document.querySelector(".player");
const apple = document.querySelector(".apple");
const canvas = document.querySelector(".gameWrapper");
document.onkeydown = checkForDirectionChange;

canvas.style.width = 500 + "px";
canvas.style.height = 500 + "px";

let posX = 0;
let posY = 0;
let currentDirection = "right";

player.style.width = 25 + "px";
player.style.height = 25 + "px";
player.style.top = posY + "px";
player.style.left = posX + "px";

let applePosX = Math.floor(Math.random() * 19) * 25;
let applePosY = Math.floor(Math.random() * 19) * 25;

apple.style.width = 25 + "px";
apple.style.height = 25 + "px";
apple.style.top = applePosY + "px";
apple.style.left = applePosX + "px";

function updateGameState() {
  move();
  checkForAppleCollision();
}

const interval = window.setInterval(updateGameState, 250);
