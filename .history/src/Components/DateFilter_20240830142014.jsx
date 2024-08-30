/** @format */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="alert-date-filter">
      <div className="input-groups">
        <div className="date">
          <i className="fa-solid fa-calendar-days"></i>
          <span>Aug 01, 2024</span>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="date">
          <i className="fa-regular fa-clock"></i>
          <span>12:00 AM</span>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <i className="fa-solid fa-arrow-right"></i>
        <div className="date">
          <i className="fa-solid fa-calendar-days"></i>
          <span>Aug 01, 2024</span>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="date">
          <i className="fa-regular fa-clock"></i>
          <span>12:00 AM</span>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>

      <div className="custom-date-picker">
        <div className="days-pickers">
         <div className="item">
          <p>Today</p>
          <p>Fri</p>
         </div>
 
        </div>


        <DatePicker
          selected={startDate}
          onChange={(update) => {
            setStartDate(update[0]);
            setEndDate(update[1]);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>

      <button className="bg-[#34B7C1] w-full py-2 rounded-md text-white font-[600]">
        Apply Date Range
      </button>
    </div>
  );
};

export default DateFilter;
