/** @format */

import { Dropdown } from "antd";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { AreaCharts, BarChart } from "../../Components/ApexCharts/Charts";
import { AlertDateSelector, EditHour } from "../../Components/Modal/Modal";
import TableLayout from "../../Components/TableLayout";

const salesData = [
  {
    x: "100",
    y: 100,
  },
  {
    x: "0-500",
    y: 50,
  },

  {
    x: "500-1000",
    y: 50,
  },

  {
    x: "0-500",
    y: 50,
  },

  {
    x: "0-500",
    y: 50,
  },

  {
    x: "0-500",
    y: 50,
  },
];

const ReportHistory = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);



  const thead = [
    <input type={"checkbox"} />,
    "Vehicle",
    "Vehicle Type",
    "Utilization",
    "Avg. Utilization/Day",
    "Hours Available/Day",
    "Total Hours Used",
    "Total Miles Driven",
  ];

  const body = [
    [
      <input type={"checkbox"} className="checkbox" />,
      78616,
      "Truck",
      "42%",
      "5h 40m 0s",
      <span onClick={() => setShow(true)}>
        24h{" "}
        <i className="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i>
      </span>,
      "34h",
      "528 mi",
    ],
  ];

  return (
    <section className="p-5">
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <EditHour show={show} handleClose={() => setShow(false)} />
      <div className="report-btn-container">
        <div className="relative" onClick={() => setOpen(true)}>
          <input
            type="text"
            className="w-[380px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
            style={{ color: "#8E8F8F" }}
            placeholder="06 Mar, 2024 at 12:00 AM - Today at 11:59 PM"
          />
          <img
            src="../Vector (11).png"
            alt=""
            className="absolute top-3 left-2"
          />
        </div>
      </div>

      <TableLayout thead={thead} className="vehicle-table mt-5" tbody={body} />
    </section>
  );
};

export default ReportHistory;
