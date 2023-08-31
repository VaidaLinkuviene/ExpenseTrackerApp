import React, { useEffect, useState } from "react";
import "./IncomesTable.css";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const elementDelete = <FontAwesomeIcon icon={faTrashCan} />;
const elementUpdate = <FontAwesomeIcon icon={faPenToSquare} />;

const IncomesTable = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [incomesTable, setIncomesTable] = useState([]);
  useEffect(() => {
    setIncomesTable(data);
  }, [data]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/incomes/${itemId}`);
      const updatedData = incomesTable.filter((item) => item._id !== itemId);
      setIncomesTable(updatedData);
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };
  const handleUpdateClick = (item) => {
    const returnUrl = "/incomesTable";
    navigate("/updateIncomes", { state: { item, returnUrl } });
  };

  return (
    <div className={`incomes-table-wrapper ${theme}`}>
      <div className="expences-table">
        <h4 className="expencesTable-title">Incomes Table</h4>
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
            {incomesTable.map((item, index) => (
              <tr key={item._id} className="item">
                <th scope="row">{index + 1}</th>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.income}</td>
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
    </div>
  );
};

export default IncomesTable;
