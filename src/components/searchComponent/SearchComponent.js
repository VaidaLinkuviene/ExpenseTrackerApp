import React, { useState, useMemo } from "react";
import './SearchComponent.css';

const SearchComponent = ({ incomesList, expensesList }) => {
  const list = [...incomesList, ...expensesList];
  const [query, setQuery] = useState("");
  // const searchRef = useRef();

  const filteredItems = useMemo(() => {
    return list.filter((item) => {
    return (
      item.selectedIncomesValue?.toLowerCase().includes(query.toLowerCase()) ||
      item.selectedExpensesValue?.toLowerCase().includes(query.toLowerCase())
    );
  });

}, [query])


  return (
    <div className="search-wrapper">
      <h3 className="search-name">Search</h3>
      <input
      className="search-input"
        value={query}
        type="search"
        placeholder="Search by type"
        aria-describedby="basic-addon1"
        onChange={(e) => setQuery(e.target.value)}/> 
      {query && (
        <div className="search-results"> {
          filteredItems.length === 0 ? (
            <p>No results were found</p>
          ):(
      <>
          <h4>Search results: </h4>
          {filteredItems.map((item) => (
            <div key = {item.id}>
              <i>Value:</i> <b>{item.incomes} {item.expenses} Eur</b> | <i>Type:</i> <b> {item.selectedIncomesValue} {item.selectedExpensesValue}</b> | <i>Name:</i>  <b>{item.name}</b> | <i>Date:</i> <b>{item.date}</b>
            </div>
          ))}
          </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
