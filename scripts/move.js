function move() {
  switch (currentDirection) {
    case "down":
      if (posY == 475) {
        posY = 0;
      } else {
        posY += 25;
      }
      player.style.top = posY + "px";
      break;
    case "up":
      if (posY == 0) {
        posY = 475;
      } else {
        posY -= 25;
      }
      player.style.top = posY + "px";
      break;
    case "left":
      if (posX == 0) {
        posX = 475;
      } else {
        posX -= 25;
      }
      player.style.left = posX + "px";
      break;
    case "right":
      if (posX == 475) {
        posX = 0;
      } else {
        posX += 25;
      }
      player.style.left = posX + "px";
      break;
  }
}
