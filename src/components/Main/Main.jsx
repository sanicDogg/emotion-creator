import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../../contexts/ModeContext";
import { CREATE_MODE, getCurrentId, POST_PATH } from "../../utils";
import { Button } from "../Button/Button";
import buttonStyles from "../Button/button.module.css";
import { Drawer } from "../Drawer/Drawer";
import { EmojiPanel } from "../EmojiPanel/EmojiPanel";
import { Modal } from "../Modal/Modal";
import s from "../Modal/modal.module.css";

let dots = [];

export const Main = () => {
  const [isAnimated, setAnimated] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  const {mode} = useContext(ModeContext);

  const sendHandler = () => {
    setAnimated(true);

    fetch(POST_PATH, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: getCurrentId(),
        data: dots,
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        // setIsLoading(false);
      })

    setTimeout(() => {
      setModalActive(true);
    }, 1000)
  }

  return (
    <>
      <Drawer animated={isAnimated} dropDots={(newDots) => dots = newDots}/>
      {mode === CREATE_MODE ?
        <>
          <EmojiPanel/>
          <Button text={"Send"} clickHandler={sendHandler}/>
          {isModalActive ? <Modal/> : null}
        </>
        :
        <>
          <p>These emotions were created by this app</p>
          <Link className={`${buttonStyles.button} ${s.link}`} to={"/"}>Try it yourself</Link>
        </>
      }

    </>
  )
}