import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { Main } from "./components/Main/Main";
import { EmojiProvider } from "./contexts/EmojiContext";
import { ModeProvider } from "./contexts/ModeContext";


function App() {
  return (
    <EmojiProvider>
      <ModeProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Homepage/>}/>
            <Route path={":id"} element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      </ModeProvider>
    </EmojiProvider>
  )
}

export default App;
