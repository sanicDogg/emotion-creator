import React, { useState } from "react";
import { DEFAULT_EMOJI } from "../utils";

export const EmojiContext = React.createContext(null);

export const EmojiProvider = ({ children }) => {
  const [mainEmoji, setMainEmoji] = useState(DEFAULT_EMOJI);

  const changeMainEmoji = (newEmoji) => {
    setMainEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ mainEmoji, changeMainEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};