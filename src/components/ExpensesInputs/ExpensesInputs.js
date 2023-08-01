import React from "react";
import "./ExpensesInputs.css";

const ExpensesInputs = () => {
  return (
    <div className="expenses-inputs">
      <div>
        <label className="expenses-label" for="expenses">
          Expenses:
        </label>
        <input id="expenses" name="expenses" type="number"></input>
      </div>

      <div class="dropdown">
        <label className="expenses-dropdown" for="expenses-dropdown">
          Types of expenses:
        </label>
        <button id="expenses-dropdown"
          class="btn btn-secondary dropdown-toggle expenses-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Food</a></li>
          <li><a class="dropdown-item" href="#">Clothes</a></li>
          <li><a class="dropdown-item" href="#">Transport</a></li>
          <li><a class="dropdown-item" href="#">Medicine</a></li>
          <li><a class="dropdown-item" href="#">Entertainments</a></li>
        </ul>
      </div>

      <div>
        <label className="incomes-label" for="incomes">
          Incomes:
        </label>
        <input id="incomes" name="incomes" type="number"></input>
      </div>

      <div class="dropdown">
        <label className="incomes-dropdown" for="incomes-dropdown">
          Types of incomes:
        </label>
        <button id="incomes-dropdown"
          class="btn btn-secondary dropdown-toggle incomes-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Salary</a></li>
          <li> <a class="dropdown-item" href="#">Gift</a></li>
          <li> <a class="dropdown-item" href="#">Winning</a></li>
        </ul>
      </div>

      <div>
        <label className="name" for="name">
          Name:
        </label>
        <input id="name" name="name" type="text"></input>
      </div>

      <div>
        <label className="date" for="date">
          Date:
        </label>
        <input id="date" name="date" type="date"></input>
      </div>

      <button type="button" class="btn btn-success">Add</button>

    </div>
  );
};

export default ExpensesInputs;
