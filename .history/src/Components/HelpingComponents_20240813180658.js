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

const InputComponent = ({
  placeholder = "",
  onChangeEvent = () => {},
  value = "",
  className = "",
  required,
  type = "text",
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChangeEvent}
      value={value}
      type={type}
      className={className}
      required={required ? true : false}
    />
  );
};

const ButtonComponent = ({
  isLoading,
  label,
  type,
  className,
  loaderColor = "#fff",
  onClickEvent,
}) => {
  return (
    <button type={type} className={className} onClick={onClickEvent}>
      {" "}
      {isLoading ? <ClipLoader color={loaderColor} /> : label}{" "}
    </button>
  );
};

const Tabs  =({tab , setTab , option}) =>{
  return    <div className="tabs-list">
  <ul>
  {option.map((i) => <li 
      className={tab === i ? "active" : ""}
      onClick={() => setselectedTab("Overview")}
  
  > {i} </li>)}
    <li
      className={selectedTab === "Overview" ? "active" : ""}
      onClick={() => setselectedTab("Overview")}
    >
      Overview
    </li>
    <li
      className={selectedTab === "Active DTC Codes" ? "active" : ""}
      onClick={() => setselectedTab("Active DTC Codes")}
    >
      Active DTC Codes ({activeDTC?.data?.totalDocs})
    </li>
  </ul>
</div>
}

export { Loader, Pagination, InputComponent, ButtonComponent };
