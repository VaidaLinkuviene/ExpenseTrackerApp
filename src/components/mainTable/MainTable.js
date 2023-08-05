import React, {useEffect} from "react";
import './MainTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTrashCan} />

const MainTable = ({data, setFilteredMainTableList}) => {


    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleDelete = (index) => {
        const updatedData = data.filter((obj, i) => i !== index);
        setFilteredMainTableList(updatedData);
      }

  useEffect(() => {
    setFilteredMainTableList(data)
  }, [data]);

  return (
    <div className="expenses-table">
      <h4>Table</h4>
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
          {data.map((item, index) => (
           <tr
           key={index}
           className={`item ${
             item.expenses ? "pink-row" : item.incomes ? "lightgreen-row" : ""
           }`}
         >
              <th scope="row">{index + 1}</th>
              <td>{item.selectedExpensesValue || item.selectedIncomesValue}</td>
              <td>{item.name}</td>
              <td>{item.expenses || item.incomes}</td>
              <td>{item.date}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(index)}>{element}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
