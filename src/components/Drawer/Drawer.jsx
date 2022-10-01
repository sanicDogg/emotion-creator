import React, { useState } from "react";
import { drawBg, EMOJI_PADDING } from "../../utils";
import Canvas from "../Canvas/Canvas";

let INIT_FLAG = false;

const checkPadding = (v1, v2, padding) => {
  return Math.abs(v1 - v2) > padding ? v1 : v2;
}

export const Drawer = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const draw = (context) => {
    if (!INIT_FLAG) {
      drawBg(context);
      INIT_FLAG = !INIT_FLAG;
    }

    context.fillStyle = "red";
    context.fillText("👍" ,x - 30, y - 30);

  };

  const handlers = {
    touchStart: (e) => {
      const touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setX(touchStart.x);
      setY(touchStart.y);
    },
    touchMove: (e) => {
      const touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };

      setX((x) => checkPadding(touchPosition.x, x, EMOJI_PADDING));
      setY((y) => checkPadding(touchPosition.y, y, EMOJI_PADDING));

    },
    touchEnd: () => {

    },
  }

  return <Canvas draw={draw} touchEventsHandlers={handlers}/>;
}
