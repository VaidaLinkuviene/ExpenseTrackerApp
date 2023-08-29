import React from "react";
import { Link } from "react-router-dom";
import "./SideCanvas.css";
import { ThemeContext } from "../themeProvider/ThemeContext";
import { useContext } from "react";

const SideCanvas = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`menu-display SideCanvas ${theme}`}>
      <div className={`left-div SideCanvas ${theme}`}>
        <div className="side-home">
          <Link to="/"> HOME /</Link>
        </div>
        <div className="side-expenses">
          <Link to="/expenseTable"> Expenses Table /</Link>
        </div>
        <div className="side-incomes">
          <Link to="/incomesTable"> Incomes Table</Link>
        </div>
      </div>
      <div className="search-input-container">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SideCanvas;
