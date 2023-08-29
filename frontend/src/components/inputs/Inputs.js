import React, { useState, useEffect } from "react";
import "./Inputs.css";
import Button from "../../reusableComponents/button/Button";
import axios from "axios";
import { isAfter } from "date-fns";

const Inputs = () => {
  const [isAddExpenseDisabled, setIsAddExpenseDisabled] = useState(true);
  const [isAddIncomeDisabled, setIsAddIncomeDisabled] = useState(true);
  const [selectedExpensesValue, setSelectedExpensesValue] = useState("Choose");
  const [selectedIncomesValue, setSelectedIncomesValue] = useState("Choose");
  const tomorrowFormatted = new Date();
  tomorrowFormatted.setDate(tomorrowFormatted.getDate() + 1);
  const tomorrow = tomorrowFormatted.toISOString().split("T")[0];
  const [expenseInputFields, setExpenseInputFields] = useState({
    expense: "",
    type: "",
    name: "",
    date: "",
  });
  const [incomeInputFields, setIncomeInputFields] = useState({
    income: "",
    type: "",
    name: "",
    date: "",
  });

  useEffect(() => {
    const isRequiredIncomesFieldsFilled =
      incomeInputFields.income !== "" &&
      incomeInputFields.type !== "" &&
      incomeInputFields.name !== "" &&
      incomeInputFields.date !== "";

    setIsAddIncomeDisabled(!isRequiredIncomesFieldsFilled);
  }, [incomeInputFields]);

  useEffect(() => {
    const isRequiredExpensesFieldsFilled =
      expenseInputFields.income !== "" &&
      expenseInputFields.type !== "" &&
      expenseInputFields.name !== "" &&
      expenseInputFields.date !== "";
    setIsAddExpenseDisabled(!isRequiredExpensesFieldsFilled);
  }, [expenseInputFields]);

  const handleChangeExpenses = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpenseInputFields((prevFields) => {
      const updatedFields = { ...prevFields, [name]: value };
      const isRequiredFieldsFilled =
        updatedFields.expense !== "" &&
        updatedFields.type !== "" &&
        updatedFields.name !== "" &&
        updatedFields.date !== "";
      setIsAddExpenseDisabled(!isRequiredFieldsFilled);
      return updatedFields;
    });
  };

  const handleChangeIncomes = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIncomeInputFields((prevFields) => {
      const updatedFields = { ...prevFields, [name]: value };
      const isRequiredFieldsFilled =
        updatedFields.income !== "" &&
        updatedFields.type !== "" &&
        updatedFields.name !== "" &&
        updatedFields.date !== "";
      setIsAddIncomeDisabled(!isRequiredFieldsFilled);
      return updatedFields;
    });
  };

  const handleExpensesItemClick = (value) => {
    setSelectedExpensesValue(value);
    setExpenseInputFields((prevFields) => ({
      ...prevFields,
      type: value,
    }));
    const isRequiredFieldsFilled =
      incomeInputFields.income !== "" &&
      value !== "" &&
      incomeInputFields.name !== "" &&
      incomeInputFields.date !== "";

    setIsAddExpenseDisabled(!isRequiredFieldsFilled);
  };

  const handleIncomesItemClick = (value) => {
    setSelectedIncomesValue(value);
    setIncomeInputFields((prevFields) => ({
      ...prevFields,
      type: value,
    }));
    const isRequiredFieldsFilled =
      incomeInputFields.income !== "" &&
      value !== "" &&
      incomeInputFields.name !== "" &&
      incomeInputFields.date !== "";

    setIsAddIncomeDisabled(!isRequiredFieldsFilled);
  };

  const handleExpenceDateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const isValidDate = !isNaN(Date.parse(value));
    if (isValidDate && !isAfter(new Date(value), new Date())) {
      setExpenseInputFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
      const isRequiredFieldsFilled =
        expenseInputFields.expense !== "" &&
        expenseInputFields.type !== "" &&
        expenseInputFields.name !== "" &&
        value !== "";
      setIsAddExpenseDisabled(!isRequiredFieldsFilled);
    }
  };
  const handleIncomeDateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!isAfter(new Date(value), new Date())) {
      setIncomeInputFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  const handleAddExpenses = async () => {
    try {
      await axios.post(
        "http://localhost:3001/expense/sendData",
        expenseInputFields
      );
      setExpenseInputFields({
        income: "",
        type: "",
        name: "",
        date: "",
      });
      setIsAddExpenseDisabled(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddIncomes = async () => {
    try {
      await axios.post(
        "http://localhost:3001/incomes/sendData",
        incomeInputFields
      );
      setIncomeInputFields({
        income: "",
        type: "",
        name: "",
        date: "",
      });
      setIsAddIncomeDisabled(true);
    } catch (err) {
      console.log(err);
    }
  };

  // const errorMessage = "Fields are required";

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
              onChange={handleChangeExpenses}
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
                  onClick={() => handleExpensesItemClick("Food")}
                >
                  Food
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  onClick={() => handleExpensesItemClick("Clothes")}
                >
                  Clothes
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  onClick={() => handleExpensesItemClick("Transport")}
                >
                  Transport
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  onClick={() => handleExpensesItemClick("Medicine")}
                >
                  Medicine
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
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
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={handleChangeExpenses}
              // className={isNameValid ? '' : 'validation-error'}
            ></input>
          </div>

          <div>
            <label className="date" htmlFor="date">
              Date:
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="date-input"
              onChange={handleExpenceDateChange}
              value={expenseInputFields.date}
              max={tomorrow}
            ></input>
          </div>

          <div className="add-button">
            <Button
              handleClick={handleAddExpenses}
              disabled={isAddExpenseDisabled}
            >
              Add Expenses
            </Button>
            {/* {isAddIncomeDisabled && (
              <p className="error-message">{errorMessage}</p>
            )} */}
          </div>
        </form>

        <form className="incomes-inputs">
          <div>
            <label className="incomes-label" htmlFor="incomes">
              Incomes:
            </label>
            <input
              id="incomes"
              name="income"
              type="number"
              placeholder="Enter value"
              onChange={handleChangeIncomes}
              value={incomeInputFields.income}
            />
          </div>

          <div className="dropdown">
            <label className="incomes-dropdown" htmlFor="incomes-dropdown">
              Types of incomes:
            </label>
            <button
              id="incomes-dropdown"
              className="btn btn-secondary dropdown-toggle incomes-dropdown"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "175px" }}
            >
              {selectedIncomesValue}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => handleIncomesItemClick("Salary")}
                >
                  Salary
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
                  onClick={() => handleIncomesItemClick("Gift")}
                >
                  Gift
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="dropdown-item"
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
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={handleChangeIncomes}
            ></input>
          </div>

          <div>
            <label className="date" htmlFor="date">
              Date:
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="date-input"
              onChange={handleIncomeDateChange}
              value={incomeInputFields.date}
              max={tomorrow}
            ></input>
          </div>

          <div>
            <Button
              disabled={isAddIncomeDisabled}
              handleClick={handleAddIncomes}
            >
              Add Incomes
            </Button>
            {/* {isAddIncomeDisabled && (
              <p className="error-message">{errorMessage}</p>
            )} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
