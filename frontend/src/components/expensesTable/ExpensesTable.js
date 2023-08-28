import React, { useEffect, useState } from "react";
import "./ExpensesTable.css";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const elementDelete = <FontAwesomeIcon icon={faTrashCan} />;
const elementUpdate = <FontAwesomeIcon icon={faPenToSquare} />;

const ExpensesTable = ({ data }) => {

  const { theme } = useContext(ThemeContext);

  const [expensesTable, setExpensesTable] = useState([]);
    useEffect(() => {
      setExpensesTable(data);
    }, [data]);

    const handleDelete = async (itemId) => {
    try{
      await axios.delete(`http://localhost:3001/expense/${itemId}`);
      const updatedData = expensesTable.filter((item) => item._id !== itemId);
      setExpensesTable(updatedData);
    }catch(err){
      console.error("Error deleting item:", err)
    }
  };

  return (
    <div className={`expenses-table-wrapper ${theme}`}>
      <div className="expenses-table">
        <h4 className="expensesTable-title">Expenses Table</h4>
        <table className="table table-exp">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Value </th>
              <th scope="col">Date </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {expensesTable.map((item, index) => (
              <tr key={item._id} className="item">
                <th scope="row">{index + 1}</th>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.expense}</td>
                <td>{item.date.split("T")[0]}</td>
                <td>
                  <button
                    className="update-button"
                    onClick={() => handleDelete(item._id)}
                  >
                    {elementUpdate}
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item._id)}
                  >
                    {elementDelete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesTable;
