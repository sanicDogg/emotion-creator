import React, { useState } from "react";
import { CREATE_MODE } from "../utils";

export const ModeContext = React.createContext(null);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(CREATE_MODE);

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};