import React, { useState, useRef } from "react";
import "./ExpensesInputs.css";

const ExpensesInputs = () => {
  const expensesRef = useRef(null);
  const incomesRef = useRef(null);
  const [selectedExpensesValue, setSelectedExpensesValue] = useState("Choose");
  const [selectedIncomesValue, setSelectedIncomesValue] = useState("Choose");

  const handleExpensesItemClick = (event, value) => {
    event.preventDefault();
    setSelectedExpensesValue(value);
  };

  const handleIncomesItemClick = (event, value) => {
    event.preventDefault();
    setSelectedIncomesValue(value);
  };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const form = event.target.closest("form")
    const expensesInputValue = parseFloat(form.elements.expenses.value.trim());
    const incomesInputValue = parseFloat(form.elements.incomes.value.trim());
    const nameInputValue = form.elements.name.value;

    const isExpensesValid = !isNaN(expensesInputValue);
    const isIncomesValid = !isNaN(incomesInputValue);

    if(isExpensesValid){
    localStorage.setItem("expensesValue", parseFloat(expensesInputValue));
      }else{
    localStorage.removeItem("expensesValue");
    console.error("Invalid input for expenses");
      setSelectedExpensesValue("Choose");
    }


    if (isIncomesValid) {
        localStorage.setItem("incomesValue", parseFloat(incomesInputValue));
      } else {
        localStorage.removeItem("incomesValue");
        console.error("Invalid input for incomes");
        setSelectedIncomesValue("Choose");
      }
    
    localStorage.setItem("selectedExpensesValue", selectedExpensesValue);
    localStorage.setItem("selectedIncomesValue", selectedIncomesValue);
    localStorage.setItem("nameValue", nameInputValue);
    localStorage.setItem("selectedExpensesValue", selectedExpensesValue);
    localStorage.setItem("selectedIncomesValue", selectedIncomesValue);
}

  return (
    <form className="expenses-inputs">
      <div>
        <label className="expenses-label" htmlFor="expenses">
          Expenses:
        </label>
        <input id="expenses" name="expenses" type="number"></input>
      </div>

      <div className="dropdown">
        <label className="expenses-dropdown" htmlFor="expenses-dropdown">
          Types of expenses:
        </label>
        <button
          id="expenses-dropdown"
          name="expenses"
          ref={expensesRef}
          className="btn btn-secondary dropdown-toggle expenses-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedExpensesValue}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item"
              href="#"
              onClick={(e) => handleExpensesItemClick(e, "Food")}
            >
              Food
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleExpensesItemClick(e, "Clothes")}
            >
              Clothes
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleExpensesItemClick(e, "Transport")}
            >
              Transport
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleExpensesItemClick(e, "Medicine")}
            >
              Medicine
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleExpensesItemClick(e, "Entertainments")}
            >
              Entertainments
            </a>
          </li>
        </ul>
      </div>

      <div>
        <label className="incomes-label" htmlFor="incomes">
          Incomes:
        </label>
        <input id="incomes" name="incomes" type="number"></input>
      </div>

      <div className="dropdown">
        <label className="incomes-dropdown" htmlFor="incomes-dropdown">
          Types of incomes:
        </label>
        <button
          id="incomes-dropdown"
          ref={incomesRef}
          className="btn btn-secondary dropdown-toggle incomes-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedIncomesValue}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleIncomesItemClick(e, "Salary")}
            >
              Salary
            </a>
          </li>
          <li>
            {" "}
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleIncomesItemClick(e, "Gift")}
            >
              Gift
            </a>
          </li>
          <li>
            {" "}
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleIncomesItemClick(e, "Winning")}
            >
              Winning
            </a>
          </li>
        </ul>
      </div>

      <div>
        <label className="name" htmlFor="name">
          Name:
        </label>
        <input id="name" name="name" type="text"></input>
      </div>

      <div>
        <label className="date" htmlFor="date">
          Date:
        </label>
        <input id="date" name="date" type="date"></input>
      </div>

      <div className="add-button">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButtonClick}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpensesInputs;
