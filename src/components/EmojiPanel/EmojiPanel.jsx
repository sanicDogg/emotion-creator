import { useContext, useState } from "react";
import { EmojiContext } from "../../contexts/EmojiContext";
import { emojis } from "../../utils";
import { Emoji } from "./Emoji/Emoji";
import s from "./emojiPanel.module.css";

export const EmojiPanel = () => {
  const [selected, setSelected] = useState(emojis[0]);
  const { changeMainEmoji } = useContext(EmojiContext);


  const clickHandler = (content) => {
    setSelected(content);
    changeMainEmoji(content);
  }

  return (
    <div className={s.emojiPanel}>
      {
        emojis.map((em) => <Emoji key={em} content={em} selectEmoji={clickHandler} selected={selected === em}/> )
      }
    </div>
  )
}