import React, { useState, useEffect } from "react";
import "./MainTable.css";
import SearchComponent from "../searchComponent/SearchComponent";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const elementDelete = <FontAwesomeIcon icon={faTrashCan} />;
const elementUpdate = <FontAwesomeIcon icon={faPenToSquare} />;

const MainTable = ({ data, showSearch, incomesData }) => {
  const [mainTable, setMainTable] = useState([]);
  const [filteredMainTableList, setFilteredMainTableList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const navigate = useNavigate();
  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const allData = [...data, ...incomesData];

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const paginatedMainTable = mainTable.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(allData.length / recordsPerPage);

  const handleDelete = async (itemId, value) => {
    const endpoint =
      value === "expenses" ? `expense/${itemId}` : `incomes/${itemId}`;
    console.log("handleDelete", itemId, mainTable, endpoint);
    try {
      await axios.delete(`http://localhost:3001/${endpoint}`);
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

  const handleUpdateClick = (item, value) => {
    const returnUrl = "/";
    value === "expenses"
      ? navigate("/updateExpenses", { state: { item, returnUrl } })
      : navigate("/updateIncomes", { state: { item, returnUrl } });
  };

  return (
    <div className="expenses-table">
      {showSearch && (
        <SearchComponent dataList={allData} onFilter={handleFilterMainTable} />
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
                  <td className={`value-cell ${item.expense ? "expense-value" : item.income ? "income-value" : ""}`}
                  > {item.expense ? "-" : item.income ? "+" : ""}{item.expense || item.income}</td>
                  <td>{item.date ? item.date.split("T")[0] : ""}</td>
                  <td>
                    <button
                      type="button"
                      className="update-button"
                      onClick={() => {
                        handleUpdateClick(
                          item,
                          item.expense ? "expenses" : "incomes"
                        );
                      }}
                    >
                      {elementUpdate}
                    </button>
                    <button
                      className="delete-button"
                      onClick={() =>
                        handleDelete(
                          item._id,
                          item.expense ? "expenses" : "incomes"
                        )
                      }
                    >
                      {elementDelete}
                    </button>
                  </td>
                </tr>
              ))
            : paginatedMainTable.map((item, index) => (
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
                  <th scope="row">
                    {index + 1 + (currentPage - 1) * recordsPerPage}
                  </th>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td className={`value-cell ${item.expense ? "expense-value" : item.income ? "income-value" : ""}`}>
                     {item.expense ? "-" : item.income ? "+" : ""}{item.expense || item.income}</td>
                  <td>{item.date.split("T")[0]}</td>
                  <td>
                    <button
                      type="button"
                      value="expenses"
                      className="update-button"
                      onClick={() => {
                        handleUpdateClick(
                          item,
                          item.expense ? "expenses" : "incomes"
                        );
                      }}
                    >
                      {elementUpdate}
                    </button>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() =>
                        handleDelete(
                          item._id,
                          item.expense ? "expenses" : "incomes"
                        )
                      }
                    >
                      {elementDelete}
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        recordsPerPage={recordsPerPage}
        allData={allData}
      />
    </div>
  );
};

export default MainTable;
