import PropTypes from "prop-types";
import React from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../utils";
import s from "./canvasStyle.module.css";

const Canvas = ({draw, touchEventsHandlers}) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext("2d");

    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw]);

  return <canvas className={s.canvas} ref={canvas} height={CANVAS_HEIGHT} width={CANVAS_WIDTH}
                 onTouchStart={touchEventsHandlers.touchStart}
                 onTouchMove={touchEventsHandlers.touchMove}
  />;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  touchEventsHandlers: PropTypes.object
};

export default Canvas;
