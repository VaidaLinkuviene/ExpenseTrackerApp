import React from "react";
import "./pagination.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav className="pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""}`}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
