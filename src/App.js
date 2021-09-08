import "./scss/style.scss";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    const json = localStorage.getItem("theme");
    const savedTheme = JSON.parse(json);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app theme${theme}`}>
      <div className="container">
        <Header setTheme={setTheme} theme={theme} />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
