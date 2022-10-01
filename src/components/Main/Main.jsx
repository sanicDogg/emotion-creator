import { useState } from "react";
import { Button } from "../Button/Button";
import { Drawer } from "../Drawer/Drawer";
import { EmojiPanel } from "../EmojiPanel/EmojiPanel";
import { Modal } from "../Modal/Modal";

export const Main = () => {
  const [isAnimated, setAnimated] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  const sendHandler = () => {
    setAnimated(true);
    setTimeout(() => {
      setModalActive(true);
    }, 1000)
  }

  return (
    <>
      <Drawer animated={isAnimated}/>
      <EmojiPanel/>
      <Button text={"Send"} clickHandler={sendHandler}/>
      {isModalActive ? <Modal /> : null}
    </>
  )
}