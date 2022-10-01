import React from "react";
import { Main } from "./components/Main/Main";
import { EmojiProvider } from "./contexts/EmojiContext";


function App() {
  return (
    <EmojiProvider>
      <Main />
    </EmojiProvider>
  )
}

export default App;
