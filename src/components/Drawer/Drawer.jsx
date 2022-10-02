import React, { useContext, useEffect, useState } from "react";
import { Dot } from "../../classes/Dot";
import { EmojiContext } from "../../contexts/EmojiContext";
import { ModeContext } from "../../contexts/ModeContext";
import { drawBg, EMOJI_PADDING, GET_PATH, getCurrentId, VIEW_MODE } from "../../utils";
import Canvas from "../Canvas/Canvas";

const checkPadding = (v1, v2, padding) => {
  return Math.abs(v1 - v2) > padding ? v1 : v2;
}

let dots = [];

export const Drawer = ({animated = false, dropDots}) => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const [readonly, setReadonly] = useState(false);

  const {mainEmoji} = useContext(EmojiContext);
  const {changeMode} = useContext(ModeContext);

  console.log(dots)


  useEffect(() => {
    if (x && y) {
      dots.push(
        new Dot(x - 30, y - 30, mainEmoji)
      )
      dropDots(dots);
    }

  }, [dropDots, mainEmoji, x, y]);

  useEffect(() => {
    fetch(GET_PATH + "?id=" + getCurrentId())
      .then(res => res.json())
      .then(data => {
        setReadonly(data.length);
        dots = data || [];
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        // setIsLoading(false);
      })
  }, [])

  useEffect(() => {
    if (readonly) changeMode(VIEW_MODE);
  }, [readonly, changeMode])

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

  return <Canvas draw={draw} readonly={readonly} touchEventsHandlers={handlers}/>;
}