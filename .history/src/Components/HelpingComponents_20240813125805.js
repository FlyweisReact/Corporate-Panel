/** @format */

import { ClipLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="flex justify-center p-5">
        {" "}
        <ClipLoader />{" "}
      </div>
    )
  );
};

const Pagination = ({ className, totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className={`pagination ${className}`}>
      <ul>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={index + 1 === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export {
    
}
