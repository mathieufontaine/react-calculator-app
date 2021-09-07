import "./scss/style.scss";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState(1);

  return (
    <div className={`app theme${theme}`}>
      <div className="container">
        <Header setTheme={setTheme} theme={theme} />
        <Calculator theme={theme} />
      </div>
    </div>
  );
}

export default App;
