function checkForDirectionChange(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // up arrow
    currentDirection = "up";
  } else if (e.keyCode == "40") {
    // down arrow
    currentDirection = "down";
  } else if (e.keyCode == "37") {
    // left arrow
    currentDirection = "left";
  } else if (e.keyCode == "39") {
    // right arrow
    currentDirection = "right";
  }
}

function checkForAppleCollision() {
  if (posX == applePosX && posY - 25 == applePosY) {
    applePosX = Math.floor(Math.random() * 19) * 25;
    applePosY = Math.floor(Math.random() * 19) * 25;
    apple.style.top = applePosY + "px";
    apple.style.left = applePosX + "px";
  }
}
