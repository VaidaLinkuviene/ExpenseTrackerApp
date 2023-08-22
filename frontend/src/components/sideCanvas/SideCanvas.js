import React from "react";
import {Link} from 'react-router-dom';
import "./SideCanvas.css";

const SideCanvas = () => {
  return (
    <div className="left-div">
      <div className="side-home">
        <Link to="/"> HOME</Link>
      </div>
      <div className="side-expenses">
        <Link to="/expenseTable"> Expenses Table</Link>
      </div>
      <div className="side-incomes">
        <Link to="/incomesTable"> Incomes Table</Link>
      </div>
    </div>
  );
};

export default SideCanvas;
