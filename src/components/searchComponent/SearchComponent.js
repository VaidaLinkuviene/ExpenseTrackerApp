import React, { useState } from "react";
import './SearchComponent.css';

const SearchComponent = ({ expensesList, incomesList, onFilter }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    onFilter(searchQuery, expensesList, incomesList);
  };


  return (
    <div className="search-wrapper">
      <h3 className="search-name">Search</h3>
      <input
      className="search-input"
        value={query}
        type="search"
        placeholder="Search by type"
        aria-describedby="basic-addon1"
        onChange={handleSearch}/> 
    </div>
  );
};

export default SearchComponent;
