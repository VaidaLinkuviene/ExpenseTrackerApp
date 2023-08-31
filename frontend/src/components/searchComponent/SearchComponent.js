import React, { useState } from "react";
import "./SearchComponent.css";

const SearchComponent = ({ dataList, onFilter }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    onFilter(searchQuery, dataList);
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        value={query}
        type="search"
        placeholder="Search by type"
        aria-describedby="basic-addon1"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;
