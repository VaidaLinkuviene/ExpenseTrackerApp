import React, { useContext } from "react";
import Toggle from "../toggle/Toggle";
import "./Header.css";
import { ThemeContext } from "../themeProvider/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`header ${theme}`}>
      <div className="header-wrapper">
        <div>
          <h2>My Wallet</h2>{" "}
        </div>

        <Toggle />
      </div>
    </div>
  );
};

export default Header;
