import { CANVAS_HEIGHT, CANVAS_WIDTH, getRandInt } from "../utils";

export class Dot {
  constructor(x, y, emoji) {
    this.x = x;
    this.y = y;
    this.dx = getRandInt(-3, 3);
    this.dy = getRandInt(-0.5, 0.5);
    this.emoji = emoji;
  }

  update() {
    const gravity = 0.7;
    const friction = 0.4;

    if (this.y + this.dy > CANVAS_HEIGHT - 10) {
      this.dx *= friction;
      this.dy *= friction;
      this.dy = -this.dy;
    } else {
      this.dy += gravity;
    }

    if (this.x + this.dx > CANVAS_WIDTH
      || this.x + this.dx < 0) {
      this.dx *= friction;
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}