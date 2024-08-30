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
        </div>
      </div>
      <div className="input-groups">
        <div className="relative">
          <input
            type="text"
            className="h-[45px] w-[150px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
            style={{ color: "#8E8F8F" }}
            placeholder="Apr 03,2022"
          />
          <img
            src="../Vector (11).png"
            alt=""
            className="absolute top-3 left-2"
          />
        </div>
        <input
          type="time"
          className="h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
          style={{ color: "#8E8F8F" }}
          placeholder="Apr 03,2022"
        />
        <div className="relative">
          <input
            type="text"
            className="h-[45px] w-[150px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
            style={{ color: "#8E8F8F" }}
            placeholder="Apr 03,2022"
          />
          <img
            src="../Vector (11).png"
            alt=""
            className="absolute top-3 left-2"
          />
        </div>
        <input
          type="time"
          className="h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
          style={{ color: "#8E8F8F" }}
          placeholder="Apr 03,2022"
        />
      </div>

      <div
        className="flex justify-between gap-10 my-6"
        style={{ alignItems: "flex-start" }}
      >
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-4">
            <div>Today</div>
            <div>Yesterday</div>
            <div>Last Week</div>
            <div>2 weeks</div>
            <div>this month</div>
            <div>Last month</div>
            <div>3 Months</div>
            <div>This Quater</div>
            <div>This year</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Wed</div>
            <div>Tue</div>
            <div>Mar 31, 2022</div>
            <div>Mar 31, 2022</div>
            <div>Mar 31, 2022</div>
            <div>Mar 31, 2022</div>
            <div>Mar 31, 2022</div>
            <div>Mar 31, 2022</div>
            <div>Mar 31, 2022</div>
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
