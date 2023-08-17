import React, {useState, useEffect} from "react";
import "./MainTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "../searchComponent/SearchComponent";
import axios from "axios";


const element = <FontAwesomeIcon icon={faTrashCan} />;


const MainTable = ({ data, showSearch }) => {

const [mainTable, setMainTable] = useState([]);
const [filteredMainTableList, setFilteredMainTableList] = useState([]);

data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleDelete = async (itemId) => {
    try{
      await axios.delete(`http://localhost:3001/expense/${itemId}`);
      const updatedData = mainTable.filter((item) => item._id !== itemId);
      setMainTable(updatedData);
      setFilteredMainTableList(filteredMainTableList.filter((item) => item._id !== itemId))
    }catch(err){
      console.error("Error deleting item:", err)
    }



  };

  useEffect(() => {
    setMainTable(data);
  console.log(mainTable)
  }, [data]);


    const handleFilterMainTable = (searchQuery, data) => {
      if (searchQuery === "") {
        setFilteredMainTableList([]);
      }else{

    const filteredExpenses = data.filter((item) => {
      return item.type
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    // const filteredIncomes = data.filter((item) => {
    //   return item.type
    //     ?.toLowerCase()
    //     .includes(searchQuery.toLowerCase());
    // });

    // const filteredItems = [...filteredExpenses, ...filteredIncomes];
    setFilteredMainTableList(filteredExpenses);
  }
  };


  return (
    <div className="expenses-table">
 {showSearch && (
      <SearchComponent
        expensesList={data}
        // incomesList={incomesList}
        onFilter={handleFilterMainTable}
      />)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type </th>
            <th scope="col">Name </th>
            <th scope="col">Value </th>
            <th scope="col">Date </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {filteredMainTableList.length > 0
            ? filteredMainTableList.map((item, index) => (
                <tr key={item._id}
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
              <td>{item.expense|| item.income}</td>
              <td>{item.date.split("T")[0]}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item._id)}
                >
                  {element}
                </button>
              </td>
            </tr>
            ))
              :
          mainTable.map((item, index) => (
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
              <td>{item.expense|| item.income}</td>
              <td>{item.date.split("T")[0]}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item._id)}
                >
                  {element}
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
