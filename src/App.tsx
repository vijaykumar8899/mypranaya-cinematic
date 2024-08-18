// ? React import start
import { useState } from "react";
// ? React import start

// ? Styles import start
import "./App.css";
import "./index.css";

// ? Styles import End

// ? Components Import start
import Home from "./Components/Specific/Home";
import Magzine from "./Components/Specific/Magzine";
// ? Components Import start

function App() {
  return (
    <>
      <div id="root">
        <Home />
        {/* <Magzine /> */}
      </div>
    </>
  );
}

export default App;
