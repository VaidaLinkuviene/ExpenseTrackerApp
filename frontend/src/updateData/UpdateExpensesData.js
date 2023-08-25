import React, { useEffect, useState } from "react";
import Button from "../reusableComponents/button/Button";
import axios from "axios";

const UpdateExpensesData = () => {

  const [expensesValue, setExpensesValue] = useState("");
  const [expensesType, setExpensesType] = useState("");
  const [expensesName, setExpensesName] = useState("");
  const [expensesDate, setExpensesDate] = useState("");

  useEffect(() => {
    setExpensesValue();
    setExpensesType();
    setExpensesName();
    setExpensesDate();
  }, []);

  const handleUpdateExpenses = async (itemId) => {
    try {
      const updatedData = {
        value: expensesValue,
        type: expensesType,
        name: expensesName,
        date: expensesDate,
      };
      await axios.put(`http://localhost:3001/expense/${itemId}`, updatedData);
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };
  return (
    <div>
      <form className="update-form">
        <div>
          <label className="expenses-label" htmlFor="expenses">
            Value of expenses:
          </label>
          <input
            id="expenses"
            name="expense"
            placeholder="Enter value"
            type="number"
            onChange={(e) => setExpensesValue(e.target.value)}
            value={expensesValue}
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
            // ref={expensesRef}
            className="btn btn-secondary dropdown-toggle expenses-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* {selectedExpensesValue} */}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                // onClick={() => handleExpensesItemClick("Food")}
              >
                Food
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                // onClick={() => handleExpensesItemClick("Clothes")}
              >
                Clothes
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                // onClick={() => handleExpensesItemClick("Transport")}
              >
                Transport
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                // onClick={() => handleExpensesItemClick("Medicine")}
              >
                Medicine
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                // onClick={() => handleExpensesItemClick("Entertainments")}
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
            value={expensesName}
            onChange={(e) => setExpensesName(e.target.value)}
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
            onChange={(e) => setExpensesDate(e.target.value)}
            value={expensesDate}
          ></input>
        </div>

        <div className="update-cancel-button">
          <Button className="update-button" onClick={handleUpdateExpenses}>Update</Button>
          <Button className="cancel-button">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateExpensesData;
