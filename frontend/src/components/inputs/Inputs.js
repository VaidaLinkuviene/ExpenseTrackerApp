import React, { useState, useRef } from "react";
import "./Inputs.css";
import Button from "../../reusableComponents/button/Button";
import axios from "axios";



const Inputs = () => {
  const expensesRef = useRef(null);
  const incomesRef = useRef(null);
  const calendarRef = useRef(null);

  const [selectedExpensesValue, setSelectedExpensesValue] = useState("Choose");
  const [selectedIncomesValue, setSelectedIncomesValue] = useState("Choose");
  const [expenseInputFields, setExpenseInputFields] = useState({
    expense: '',
    type: '',
    name: '',
    date: new Date()
  })  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpenseInputFields((pre) => {
      return {...pre, [name]:value};
    });
  };

  const handleExpensesItemClick = (value) => {
    setSelectedExpensesValue(value);
    setExpenseInputFields((prevFields) => ({
      ...prevFields,
      type: value
    }));
  };

  const handleIncomesItemClick = (value) => {
    setSelectedIncomesValue(value);
  };

  const handleDateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpenseInputFields((prevFields) => ({
      ...prevFields,
      [name]: value
    }));
  };

  const handleAddExpenses = async () => {

    // const inputNameValue = document.getElementById("name");
    // const dropdownExpense = document.getElementById("expenses-dropdown");
    // const expenseInputValue = document.getElementById("expenses");

    // let formIsValid = true;
    // if (inputNameValue.value === '') {
    //   formIsValid = false;
    //   setIsNameValid(false);
    // } else {
    //   setIsNameValid(true);
    // }
  
    // if (expenseInputValue.value === '' || expenseInputValue.value == null) {
    //   formIsValid = false;
    //   setIsExpenseValid(false);
    // } else {
    //   setIsExpenseValid(true);
    // }
  
    // if (dropdownExpense.value === '') {
    //   formIsValid = false;
    //   setIsDropdownValid(false);
    // } else {
    //   setIsDropdownValid(true);
    // }
    //   if(formIsValid){
    //   inputNameValue.classList.remove("validation-error");
    //   dropdownExpense.classList.remove("validation-error");
    //   expenseInputValue.classList.remove("validation-error");


      try {
      const postData = await axios.post(
        "http://localhost:3001/expense/sendData",
        expenseInputFields
      );
      console.log(postData);
    } catch (err) {
      console.log(err);
    }
  }
  // }

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
              name="expense"
              placeholder="Enter value"
              type="number"
              onChange={handleChange}
              value={expenseInputFields.expense}
              // className={isExpenseValid ? '' : 'validation-error'}
            ></input>
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
                  onClick={() => handleExpensesItemClick("Food")}
                >
                  Food
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleExpensesItemClick("Clothes")}
                >
                  Clothes
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleExpensesItemClick("Transport")}
                >
                  Transport
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleExpensesItemClick( "Medicine")}
                >
                  Medicine
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleExpensesItemClick("Entertainments")}
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
              onChange={handleChange}
              // className={isNameValid ? '' : 'validation-error'}
            ></input>
          </div>

          <div>
            <label className="date" htmlFor="date">
              Date:
            </label>
            <input ref={calendarRef} id="date" name="date" type="date" onChange={handleDateChange} value={expenseInputFields.date}></input>
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
                  onClick={() => handleIncomesItemClick("Salary")}
                >
                  Salary
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleIncomesItemClick("Gift")}
                >
                  Gift
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleIncomesItemClick("Winning")}
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
            <Button>Add Incomes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
