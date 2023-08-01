import React, { useState, useRef} from "react";
import "./Inputs.css";
import IncomesTable from "../incomesTable/IncomesTable";
import ExpensesTable from "../expensesTable/ExpensesTable";

const Inputs = () => {
  const expensesRef = useRef(null);
  const incomesRef = useRef(null);
  const calendarRef = useRef(null);
  const [selectedExpensesValue, setSelectedExpensesValue] = useState("Choose");
  const [selectedIncomesValue, setSelectedIncomesValue] = useState("Choose");
  const [expensesList, setExpensesList] = useState([]);
  const [incomesList, setIncomesList] = useState([]);


  const handleExpensesItemClick = (event, value) => {
    event.preventDefault();
    setSelectedExpensesValue(value);
  };

  const handleIncomesItemClick = (event, value) => {
    event.preventDefault();
    setSelectedIncomesValue(value);
  };

  const handleAddExpenses = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");
    const expensesInputValue = form.elements.expenses.value;
    const nameInputValue = form.elements.name.value;
    const dateValue = form.elements.date.value;

    const isExpensesValid = !isNaN(expensesInputValue);

    if (isExpensesValid) {
      const newExpensesList = {
        expenses: expensesInputValue,
        selectedExpensesValue,
        name: nameInputValue,
        date: dateValue,
      };

      const updatedExpensesList = [...expensesList, newExpensesList];

      localStorage.setItem("expensesList", JSON.stringify(updatedExpensesList));
      setExpensesList(updatedExpensesList);
    }
    }

      const handleAddIncomes = (event) => {
        event.preventDefault();
        const form = event.target.closest("form");
        const incomesInputValue = form.elements.incomes.value;
        const nameInputValue = form.elements.name.value;
        const dateValue = form.elements.date.value;
    
        const isIncomesValid = !isNaN(incomesInputValue);
    
        if (isIncomesValid) {
          const newIncomesList = {
            incomes: incomesInputValue,
            selectedIncomesValue,
            name: nameInputValue,
            date: dateValue,
          };

      const updatedIncomesList = [...incomesList, newIncomesList];

      localStorage.setItem("incomesList", JSON.stringify(updatedIncomesList));
      setIncomesList(updatedIncomesList);
    }
  };

  return (
    <div>
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
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => handleExpensesItemClick(e, "Food")}
              >
                Food
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => handleExpensesItemClick(e, "Clothes")}
              >
                Clothes
              </a>
            </li>
            <li>
            {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => handleExpensesItemClick(e, "Transport")}
              >
                Transport
              </a>
            </li>
            <li>
            {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => handleExpensesItemClick(e, "Medicine")}
              >
                Medicine
              </a>
            </li>
            <li>
            {" "}
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
          <label className="name" htmlFor="name">
            Name:
          </label>
          <input id="name" name="name" type="text"></input>
        </div>

        <div>
          <label className="date" htmlFor="date">
            Date:
          </label>
          <input ref={calendarRef} id="date" name="date" type="date"></input>
        </div>

        <div className="add-button">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddExpenses}
          >
            Add Expenses
          </button>
        </div>
      </form>

      <form className="incomes-inputs">
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
          <input ref={calendarRef} id="date" name="date" type="date"></input>
        </div>

        <div className="add-button">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddIncomes}
          >
            Add Incomes
          </button>
        </div>
      </form>

      <ExpensesTable expensesList={expensesList} setExpensesList={setExpensesList} />
      <IncomesTable incomesList={incomesList} setIncomesList={setIncomesList}/>
    </div>
  );
};

export default Inputs;
