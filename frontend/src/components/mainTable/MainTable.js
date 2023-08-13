import React, { useEffect, useReducer } from "react";
import "./MainTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const element = <FontAwesomeIcon icon={faTrashCan} />;

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

const reducer = (state, action) => {
  switch (action.type){
  case "LOADING": 
  return {...state, isLoading:true};
  case "SUCCESS": 
  return {...state, data: action.payload, isLoading: false};
  case "FILURE": 
  return {...state, error: action.payload, isLoading: false};
  default:
    return state;
  }
};

const MainTable = ({ data, setFilteredMainTableList }) => {

const [items, dispatch] = useReducer(reducer, initialState);

const handleFetch = async() => {
  dispatch({type: 'LOADING'});
  try{
  const response = await axios.get('http://localhost:3001/expense')
  dispatch({type: "SUCCESS", payload: response.data});
  }catch(err){
    dispatch({type: "ERROR", payload: err})
  }
};

useEffect( () => {
  handleFetch();
}, [])



console.log(items?.data.map((item) => item.name))


  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleDelete = (index) => {
    const updatedData = data.filter((obj, i) => i !== index);
    setFilteredMainTableList(updatedData);
  };

  useEffect(() => {
    setFilteredMainTableList(data);
  }, [data]);

  return (
    <div className="expenses-table">

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
          {items?.data.map((item, index) => (
            <tr
              key={index}
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
              <td>{item.date}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
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
