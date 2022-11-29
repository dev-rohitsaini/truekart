import React from "react";
const Pagination = (props) => {
  const nPages = props.nPages;
  const currentPage = props.currentPage;
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) props.setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) props.setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <a className="page-link" onClick={prevPage}>
              Previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${currentPage == pgNumber ? "active" : ""}`}
            >
              <a
                className="page-link"
                onClick={() => props.setCurrentPage(pgNumber)}
              >
                {pgNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
