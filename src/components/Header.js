import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>calc</h1>
      <div className="themes">
        <p>THEME</p>
        <div className="switch-theme">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div id="switch"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
