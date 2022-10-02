import { CANVAS_HEIGHT, CANVAS_WIDTH, getRandInt } from "../utils";

let gravity;
let friction;

const gravityCase = getRandInt(0, 2);
switch (gravityCase) {
  case 0:
    gravity = 0;
    friction = .95;
    break;
  case 1:
    gravity = 0.2;
    friction = 1.05;
    break;
  case 2:
    gravity = -.01;
    friction = .6;
    break;
  default:
    gravity = undefined;
    friction = undefined;
}

export class Dot {
  constructor(x, y, emoji) {
    this.x = x;
    this.y = y;
    this.dx = getRandInt(-3, 3);
    this.dy = getRandInt(-0.5, 0.5);
    this.emoji = emoji;
  }

  update(gravity = 0.7, friction = 0.4) {
    if (this.y + this.dy > CANVAS_HEIGHT - 10) {
      this.dx *= friction;
      this.dy *= friction;
      this.dy = -this.dy;
    } else {
      this.dy += gravity;
    }

    if (this.y < -10) {
      this.dx = 0;
      this.dy = 0;
    }

    if (this.x + this.dx > CANVAS_WIDTH
      || this.x + this.dx < 0) {
      this.dx *= friction;
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  updateLong() {
    this.update(gravity, friction);
  }
}