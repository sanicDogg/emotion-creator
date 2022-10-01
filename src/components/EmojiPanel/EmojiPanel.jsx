import { useState } from "react";
import { emojies } from "../../utils";
import { Emoji } from "./Emoji/Emoji";
import s from "./emojiPanel.module.css";

export const EmojiPanel = () => {
  const [selected, setSelected] = useState(emojies[0]);

  const clickHandler = (content) => {
    setSelected(content);
  }

  return (
    <div className={s.emojiPanel}>
      {
        emojies.map((em) => <Emoji key={em} content={em} selectEmoji={clickHandler} selected={selected === em}/> )
      }
    </div>
  )
}