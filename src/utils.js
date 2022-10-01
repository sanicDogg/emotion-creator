export const CANVAS_WIDTH = 0.87 * window.innerWidth;
export const CANVAS_HEIGHT = 0.4 * window.innerHeight;
export const EMOJI_PADDING = 20;

const EMOJI_SIZE = 33;

export const drawBg = (ctx) => {
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.font = `${EMOJI_SIZE}px serif`;
  ctx.fillStyle = "red";
}

export const emojis = [
  "👍", "❤", "😊", "💋", "👌"
];

export const DEFAULT_EMOJI = emojis[0];

export const getRandInt = (min, max) => Math.round(Math.random() * (max - min) + min);