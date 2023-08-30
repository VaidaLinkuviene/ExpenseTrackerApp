import React, { useEffect, useState } from "react";
// import Button from "../reusableComponents/button/Button";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './UpdateExpensesData.css'

const UpdateExpensesData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location?.state?.item;
  const [expensesId, setExpensesId] = useState("");
  const [expensesValue, setExpensesValue] = useState("");
  const [expensesType, setExpensesType] = useState("");
  const [expensesName, setExpensesName] = useState("");
  const [expensesDate, setExpensesDate] = useState("");

  useEffect(() => {
    setExpensesId(item?._id);
    setExpensesValue(item?.expense);
    setExpensesType(item?.type);
    setExpensesName(item?.name);
    setExpensesDate(item?.date.substring(0, 10));
  }, []);

  const handleItemSelection = (type) => {
    console.log("Item Type Selected: ", type);
    setExpensesType(type);
  };

  const handleUpdateExpenses = async () => {
    try {
      const updatedData = {
        expense: expensesValue,
        type: expensesType,
        name: expensesName,
        date: expensesDate,
      };

      await axios.put(
        `http://localhost:3001/expense/${expensesId}`,
        updatedData
      );
      navigate("/");
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };
  return (
    <div className="Update-page-wrapper">
      <form >
        <div >
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
            {expensesType || "Select Type"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Food")}
              >
                Food
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Clothes")}
              >
                Clothes
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Transport")}
              >
                Transport
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Medicine")}
              >
                Medicine
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Entertainments")}
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
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleUpdateExpenses}
          >
            Update
          </button>
          <Link to="/" className="cancel-button">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateExpensesData;
