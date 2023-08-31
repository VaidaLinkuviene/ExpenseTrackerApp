import React, { useEffect, useState } from "react";
import "./ExpensesTable.css";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const elementDelete = <FontAwesomeIcon icon={faTrashCan} />;
const elementUpdate = <FontAwesomeIcon icon={faPenToSquare} />;

const ExpensesTable = ({ data }) => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const [expensesTable, setExpensesTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    setExpensesTable(data);
  }, [data]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const paginatedExpensesTable = expensesTable.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(data.length / recordsPerPage);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/expense/${itemId}`);
      const updatedData = expensesTable.filter((item) => item._id !== itemId);
      setExpensesTable(updatedData);
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  const handleUpdateClick = (item) => {
    const returnUrl = "/expenseTable";
    navigate("/updateExpenses", { state: { item, returnUrl } });
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
            {paginatedExpensesTable.map((item, index) => (
              <tr key={item._id} className="item">
                <th scope="row">
                  {index + 1 + (currentPage - 1) * recordsPerPage}
                </th>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.expense}</td>
                <td>{item.date ? item.date.split("T")[0] : ""}</td>
                <td>
                  <button
                    type="button"
                    className="update-button"
                    onClick={() => {
                      handleUpdateClick(item);
                    }}
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
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        recordsPerPage={recordsPerPage}
        allData={data}
      />
    </div>
  );
};

export default ExpensesTable;
