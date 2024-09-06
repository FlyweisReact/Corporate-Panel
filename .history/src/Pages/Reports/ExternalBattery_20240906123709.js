/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector, EditThreshold } from "../../Components/Modal/Modal";
import TableLayout from "../../Components/TableLayout";
import { Dropdown } from "antd";

const items = [
  {
    key: "0",
    label: <a href="#">Download</a>,
  },
  {
    key: "1",
    label: <a href="#">Share</a>,
  },
  {
    key: "2",
    label: <a href="#">Schedule</a>,
  },
];

const ExternalBattery = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const thead = [
    <input type={"checkbox"} />,
    "Vehicle",
    "Vehicle Type" ,
    "Device Name" ,
    "Battery Level"
  ];

  const body = [
    [
      <input type={"checkbox"} className="checkbox" />,
      "Abdul Muqeet",
      <div
        className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#18A88C] flex justify-center gap-1 items-center m-auto"
        style={{ fontWeight: "900" }}
      >
        100
      </div>,
      "0 mi",
      "0h 0m",
      0,
      0,
      0,
    ],
  ];
  return (
    <section className="dormancy-report-page p-5">
      <Helmet title={"Driver Safety Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <EditThreshold show={show} handleClose={() => setShow(false)} />

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
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <button className="btn">Report Action</button>
        </Dropdown>
      </div>

      <hr className="mt-5 mb-5" />

      <TableLayout thead={thead} className="vehicle-table mt-5" tbody={body} />
    </section>
  );
};

export default ExternalBattery;
