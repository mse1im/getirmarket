import React from "react";
import "./Pagination.scss";

const Pagination: React.FC<IPaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1) {
      pageNumbers.push(i);
      continue;
    }

    if (i === totalPages) {
      pageNumbers.push(i);
      continue;
    }

    if (i >= currentPage - 1 && i <= currentPage + 1) {
      pageNumbers.push(i);
      continue;
    }

    if (i === 2 && currentPage > 4) {
      pageNumbers.push("...");
    }

    if (i === totalPages - 1 && currentPage < totalPages - 1) {
      pageNumbers.push("...");
    }
  }

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item">
          <a onClick={() => paginate(currentPage - 1)} className="page-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.06678 12.3328C5.11054 12.4379 5.1718 12.5343 5.25932 12.6131L11.3857 18.7438C11.7271 19.0854 12.2784 19.0854 12.6198 18.7438C12.9611 18.4023 12.9611 17.8505 12.6198 17.5089L7.98995 12.8758L18.1248 12.8758C18.6062 12.8758 19 12.4817 19 12C19 11.5183 18.6062 11.1242 18.1248 11.1242L7.9812 11.1242L12.611 6.49109C12.9523 6.14951 12.9523 5.59775 12.611 5.25618C12.2697 4.91461 11.7183 4.91461 11.377 5.25618L5.25057 11.3869C5.1718 11.4657 5.11054 11.5621 5.05802 11.6672C4.97926 11.8774 4.97926 12.1226 5.06678 12.3328Z"
              />
            </svg>{" "}
            Prev
          </a>
        </li>
      )}
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <li key={number + index} className="page-item disabled">
            <span className="page-link">{number}</span>
          </li>
        ) : (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a onClick={() => paginate(number as number)} className="page-link">
              {number}
            </a>
          </li>
        )
      )}
      {currentPage < totalPages && (
        <li className="page-item">
          <a onClick={() => paginate(currentPage + 1)} className="page-link">
            Next{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9332 11.6672C18.8895 11.5621 18.8282 11.4657 18.7407 11.3869L12.6143 5.25618C12.2729 4.91461 11.7216 4.91461 11.3802 5.25618C11.0389 5.59775 11.0389 6.14951 11.3802 6.49108L16.01 11.1242L5.8752 11.1242C5.39384 11.1242 5 11.5183 5 12C5 12.4817 5.39384 12.8758 5.8752 12.8758L16.0188 12.8758L11.389 17.5089C11.0477 17.8505 11.0477 18.4023 11.389 18.7438C11.7303 19.0854 12.2817 19.0854 12.623 18.7438L18.7494 12.6131C18.8282 12.5342 18.8895 12.4379 18.942 12.3328C19.0207 12.1226 19.0207 11.8774 18.9332 11.6672Z"
              />
            </svg>
          </a>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
