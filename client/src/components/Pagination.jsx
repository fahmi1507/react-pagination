import React from "react";

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mx-auto">
      <ul className="pagination">
        {pageNumbers.map((n) => (
          <li key={n} className="page-item">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => paginate(n)}
              className="page-link"
            >
              {n}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
