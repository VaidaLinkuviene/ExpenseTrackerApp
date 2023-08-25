import React, { useState, useEffect } from "react";
import "./MainTable.css";
import SearchComponent from "../searchComponent/SearchComponent";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const elementDelete = <FontAwesomeIcon icon={faTrashCan} />;
const elementUpdate = <FontAwesomeIcon icon={faPenToSquare} />;

const MainTable = ({ data, showSearch, incomesData }) => {
  const [mainTable, setMainTable] = useState([]);
  const [filteredMainTableList, setFilteredMainTableList] = useState([]);

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const allData = [...data, ...incomesData];

  const handleDeleteExpenses = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/expense/${itemId}`);
      const updatedData = mainTable.filter((item) => item._id !== itemId);
      setMainTable(updatedData);
      setFilteredMainTableList(
        filteredMainTableList.filter((item) => item._id !== itemId)
      );
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  const handleDeleteIncomes = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/incomes/${itemId}`);
      const updatedData = mainTable.filter((item) => item._id !== itemId);
      setMainTable(updatedData);
      setFilteredMainTableList(
        filteredMainTableList.filter((item) => item._id !== itemId)
      );
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  useEffect(() => {
    setMainTable(allData);
    console.log(mainTable);
  }, [data, incomesData]);

  const handleFilterMainTable = (searchQuery, allData) => {
    if (searchQuery === "") {
      setFilteredMainTableList([]);
    } else {
      const filteredData = allData.filter((item) => {
        return item.type?.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setFilteredMainTableList(filteredData);
    }
  };

  return (
    <div className="expenses-table">
      {showSearch && (
        <SearchComponent
          dataList={allData}
          // incomesList={incomesList}
          onFilter={handleFilterMainTable}
        />
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type </th>
            <th scope="col">Name </th>
            <th scope="col">Value </th>
            <th scope="col">Date </th>
            <th scope="col">Action </th>
          </tr>
        </thead>
        <tbody>
          {filteredMainTableList.length > 0
            ? filteredMainTableList.map((item, index) => (
                <tr
                  key={item._id}
                  className={`item ${
                    item.expenses
                      ? "pink-row"
                      : item.incomes
                      ? "lightgreen-row"
                      : ""
                  }`}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.expense || item.income}</td>
                  <td>{item.date.split("T")[0]}</td>
                  <td>
                    <button
                      className="update-button"
                      onClick={() => handleDeleteExpenses(item._id)}
                    >
                      {elementUpdate}
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteIncomes(item._id)}
                    >
                      {elementDelete}
                    </button>
                  </td>
                </tr>
              ))
            : mainTable.map((item, index) => (
                <tr
                  key={item._id}
                  className={`item ${
                    item.expenses
                      ? "pink-row"
                      : item.incomes
                      ? "lightgreen-row"
                      : ""
                  }`}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.expense || item.income}</td>
                  <td>{item.date.split("T")[0]}</td>
                  <td>
                    <button type="button" className="update-button">
                      {elementUpdate}
                    </button>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleDeleteExpenses(item._id)}
                    >
                      {elementDelete}
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
