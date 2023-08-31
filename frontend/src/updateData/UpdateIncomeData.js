import React, { useEffect, useState } from "react";
// import Button from "../reusableComponents/button/Button";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./UpdateExpensesData.css";

const UpdateIncomesData = ({ dispatch, onDataUpdated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location?.state?.item;
  const returnUrl = location?.state?.returnUrl;

  const [incomesId, setIncomesId] = useState("");
  const [incomesValue, setIncomesValue] = useState("");
  const [incomesType, setIncomesType] = useState("");
  const [incomesName, setIncomesName] = useState("");
  const [incomesDate, setIncomesDate] = useState("");

  useEffect(() => {
    setIncomesId(item?._id);
    setIncomesValue(item?.income);
    setIncomesType(item?.type);
    setIncomesName(item?.name);
    setIncomesDate(item?.date.substring(0, 10));
  }, []);

  const handleItemSelection = (type) => {
    console.log("Item Type Selected: ", type);
    setIncomesType(type);
  };

  const handleUpdateIncomes = async () => {
    try {
      const updatedData = {
        income: incomesValue,
        type: incomesType,
        name: incomesName,
        date: incomesDate,
      };

      await axios.put(
        `http://localhost:3001/incomes/${incomesId}`,
        updatedData
      );
      onDataUpdated();
      navigate(returnUrl);
      dispatch({ type: "PUSH", payload: updatedData });
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };
  return (
    <div className="Update-page-wrapper">
      <form className="update-form">
        <div>
          <label className="incomes-label" htmlFor="incomes">
            Value of incomes:
          </label>
          <input
            id="incomes"
            name="income"
            placeholder="Enter value"
            type="number"
            onChange={(e) => setIncomesValue(e.target.value)}
            value={incomesValue}
            // className={isIncomeValid ? '' : 'validation-error'}
          ></input>
        </div>

        <div className="dropdown">
          <label className="incomes-dropdown" htmlFor="incomes-dropdown">
            Types of incomes:
          </label>
          <button
            placeholder="Choose"
            id="incomes-dropdown"
            // ref={incomesRef}
            className="btn btn-secondary dropdown-toggle incomes-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {incomesType || "Select Type"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Salary")}
              >
                Salary
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Gift")}
              >
                Gift
              </a>
            </li>
            <li>
              {" "}
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemSelection("Winning")}
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
            value={incomesName}
            onChange={(e) => setIncomesName(e.target.value)}
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
            onChange={(e) => setIncomesDate(e.target.value)}
            value={incomesDate}
          ></input>
        </div>

        <div className="update-cancel-button">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleUpdateIncomes}
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

export default UpdateIncomesData;
