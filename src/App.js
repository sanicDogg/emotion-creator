import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { Main } from "./components/Main/Main";
import { EmojiProvider } from "./contexts/EmojiContext";


function App() {
  return (
    <EmojiProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Homepage />} />
          <Route path={":id"} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </EmojiProvider>
  )
}

export default App;
