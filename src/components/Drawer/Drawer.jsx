import React, { useContext, useEffect, useState } from "react";
import { Dot } from "../../classes/Dot";
import { EmojiContext } from "../../contexts/EmojiContext";
import { drawBg, EMOJI_PADDING } from "../../utils";
import Canvas from "../Canvas/Canvas";

const checkPadding = (v1, v2, padding) => {
  return Math.abs(v1 - v2) > padding ? v1 : v2;
}

const dots = [];

export const Drawer = ({animated = false}) => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const {mainEmoji} = useContext(EmojiContext);

  useEffect(() => {
    if (x && y) {
      dots.push(
        new Dot(x - 30, y - 30, mainEmoji)
      )
    }

  }, [mainEmoji, x, y]);

  const draw = (context) => {
    drawBg(context);

    dots.forEach(dot => {
      if (animated) dot.update();
      context.fillText(dot.emoji, dot.x, dot.y)
    });
  };

  const handlers = {
    touchStart: (e) => {
      const touchStart = {x: e.touches[0].clientX, y: e.touches[0].clientY};
      setX(touchStart.x);
      setY(touchStart.y);
    },
    touchMove: (e) => {
      const touchPosition = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};

      setX((x) => checkPadding(touchPosition.x, x, EMOJI_PADDING));
      setY((y) => checkPadding(touchPosition.y, y, EMOJI_PADDING));

    },
    touchEnd: () => {

    },
  }

  return <Canvas draw={draw} touchEventsHandlers={handlers}/>;
}