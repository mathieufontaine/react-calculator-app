import React from "react";

const Header = ({ setTheme, theme }) => {
  const onChangeValue = e => {
    e.target.parentNode.parentNode.childNodes.forEach(
      node => (node.className = "switch__label")
    );
    e.target.parentNode.classList.add = "switch__label--selected";
    setTheme(e.target.value);
    const json = JSON.stringify(e.target.value);
    localStorage.setItem("theme", json);
  };

  return (
    <header className="header">
      <h1>calc</h1>
      <div className="themes">
        <p class="themes__text">THEME</p>
        <div className="themes__container">
          <ul className="themes__numbers">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div className="switch" onChange={e => onChangeValue(e)}>
            <label
              for="theme1"
              className={`switch__label ${theme == 1 &&
                "switch__label--selected"}`}
            >
              <input
                id="theme1"
                type="radio"
                name="switch"
                value="1"
                className="switch__input"
              />
            </label>
            <label
              for="theme2"
              className={`switch__label ${theme == 2 &&
                "switch__label--selected"}`}
            >
              <input
                id="theme2"
                type="radio"
                name="switch"
                value="2"
                className="switch__input"
              />
            </label>
            <label
              for="theme3"
              className={`switch__label ${theme == 3 &&
                "switch__label--selected"}`}
            >
              <input
                id="theme3"
                type="radio"
                name="switch"
                value="3"
                className="switch__input"
              />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
