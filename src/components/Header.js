import React, { useState } from "react";

const Header = ({ theme, setTheme }) => {
  const onChangeValue = e => {
    e.target.parentNode.parentNode.childNodes.forEach(
      node => (node.className = "switch__label")
    );
    e.target.parentNode.className = "switch__label switch__label--selected";
    setTheme(e.target.value);
  };

  return (
    <div className={`header theme${theme}`}>
      <h1>calc</h1>
      <div className="themes">
        <p>THEME</p>
        <div className="switch-container">
          <ul className="labels">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div className="switch" onChange={e => onChangeValue(e)}>
            <label
              for="theme1"
              className={"switch__label switch__label--selected"}
            >
              <input
                id="theme1"
                type="radio"
                name="switch"
                value="1"
                className="switch__input"
              />
            </label>
            <label for="theme2" className="switch__label">
              <input
                id="theme2"
                type="radio"
                name="switch"
                value="2"
                className="switch__input"
              />
            </label>
            <label for="theme3" className="switch__label">
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
    </div>
  );
};

export default Header;
