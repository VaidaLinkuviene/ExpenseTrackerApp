import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Inputs.css";
import SearchComponent from "../searchComponent/SearchComponent";
import MainTable from "../mainTable/MainTable";
import Button from "../../reusableComponents/button/Button";

const Inputs = ({
  incomesList,
  setIncomesList,
  expensesList,
  setExpensesList,
  showSearch,
}) => {
  const expensesRef = useRef(null);
  const incomesRef = useRef(null);
  const calendarRef = useRef(null);

  const [selectedExpensesValue, setSelectedExpensesValue] = useState("Choose");
  const [selectedIncomesValue, setSelectedIncomesValue] = useState("Choose");
  const [filteredMainTableList, setFilteredMainTableList] = useState([]);
  const [expensesError, setExpensesError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    const storedExpensesList =
      JSON.parse(localStorage.getItem("expensesList")) || [];
    const storedIncomesList =
      JSON.parse(localStorage.getItem("incomesList")) || [];

    setExpensesList(storedExpensesList);

    setIncomesList(storedIncomesList);

    setFilteredMainTableList([...storedExpensesList, ...storedIncomesList]);
  }, []);

  const handleExpensesItemClick = (event, value) => {
    event.preventDefault();
    setSelectedExpensesValue(value);
  };

  const handleIncomesItemClick = (event, value) => {
    event.preventDefault();
    setSelectedIncomesValue(value);
  };

  const inputValidation = (inputValue) => {
    const isValid = !isNaN(inputValue) && inputValue !== "";
    if (!isValid) {
      setExpensesError("Field is required");
    } else {
      setExpensesError("");
    }
    return isValid;
  };

  const nameValidation = (name) => {
    const isValid = name.trim() !== "";
    if (!isValid) {
      setNameError("Field is required");
    } else {
      setNameError("");
    }
    return isValid;
  };

  const handleAddExpenses = useCallback(
    (event) => {
      event.preventDefault();
      const form = event.target.closest("form");
      const expensesInputValue = form.elements.expenses.value;
      const nameInputValue = form.elements.name.value;
      const dateValue = form.elements.date.value;

      if (
        inputValidation(expensesInputValue) &&
        nameValidation(nameInputValue)
      ) {
        const newExpensesList = {
          expenses: expensesInputValue,
          selectedExpensesValue: selectedExpensesValue,
          name: nameInputValue,
          date: dateValue,
        };

        const updatedExpensesList = [...expensesList, newExpensesList];

        localStorage.setItem(
          "expensesList",
          JSON.stringify(updatedExpensesList)
        );
        setExpensesList(updatedExpensesList);
        setFilteredMainTableList([...filteredMainTableList, newExpensesList]);

        form.elements.expenses.value = "";
        form.elements.name.value = "";
        form.elements.date.value = "";
        setSelectedExpensesValue("Choose");
      }
    },
    [expensesList, selectedExpensesValue]
  );

  const handleAddIncomes = useCallback(
    (event) => {
      event.preventDefault();
      const form = event.target.closest("form");
      const incomesInputValue = form.elements.incomes.value;
      const nameInputValue = form.elements.name.value;
      const dateValue = form.elements.date.value;

      if (inputValidation(incomesInputValue, "incomes")) {
        const newIncomesList = {
          incomes: incomesInputValue,
          selectedIncomesValue: selectedIncomesValue,
          name: nameInputValue,
          date: dateValue,
        };

        const updatedIncomesList = [...incomesList, newIncomesList];

        localStorage.setItem("incomesList", JSON.stringify(updatedIncomesList));
        setIncomesList(updatedIncomesList);
        setFilteredMainTableList([...filteredMainTableList, newIncomesList]);

        form.elements.incomes.value = "";
        form.elements.name.value = "";
        form.elements.date.value = "";
        setSelectedIncomesValue("Choose");
      }
    },
    [incomesList, selectedIncomesValue]
  );

  const handleFilterMainTable = (searchQuery, expensesList, incomesList) => {
    const filteredExpenses = expensesList.filter((item) => {
      return item.selectedExpensesValue
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    const filteredIncomes = incomesList.filter((item) => {
      return item.selectedIncomesValue
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    const filteredItems = [...filteredExpenses, ...filteredIncomes];
    setFilteredMainTableList(filteredItems);
  };

  return (
    <div>
      <div className="inputs-wrapper">
        <form className="expenses-inputs">
          <div>
            <label className="expenses-label" htmlFor="expenses">
              Value of expenses:
            </label>
            <input
              id="expenses"
              name="expenses"
              placeholder="Enter value"
              type="number"
            />
            {expensesError && (
              <div className="error-message">{expensesError}</div>
            )}
          </div>

          <div className="dropdown">
            <label className="expenses-dropdown" htmlFor="expenses-dropdown">
              Types of expenses:
            </label>
            <button
              placeholder="Choose"
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
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter name"
            ></input>
            {nameError && <div className="error-message">{nameError}</div>}
          </div>

          <div>
            <label className="date" htmlFor="date">
              Date:
            </label>
            <input ref={calendarRef} id="date" name="date" type="date"></input>
            {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
          </div>

          <div className="add-button">
            <Button handleClick={handleAddExpenses}>Add Expenses</Button>
          </div>
        </form>

        <form className="incomes-inputs">
          <div>
            <label className="incomes-label" htmlFor="incomes">
              Incomes:
            </label>
            <input
              id="incomes"
              name="incomes"
              type="number"
              placeholder="Enter value"
            />
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
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter name"
            ></input>
          </div>

          <div>
            <label className="date" htmlFor="date">
              Date:
            </label>
            <input ref={calendarRef} id="date" name="date" type="date"></input>
          </div>

          <div className="add-button">
            <Button handleClick={handleAddIncomes}>Add Incomes</Button>
          </div>
        </form>
      </div>

      {showSearch && <SearchComponent
        expensesList={expensesList}
        incomesList={incomesList}
        onFilter={handleFilterMainTable}
      />}
     <div className="all-tables">
        <MainTable
          data={filteredMainTableList}
          setFilteredMainTableList={setFilteredMainTableList}
        />
      </div>
    </div>
  );
};

export default Inputs;
