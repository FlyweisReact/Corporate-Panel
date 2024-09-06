/** @format */

import { Dropdown } from "antd";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { AreaCharts } from "../../Components/ApexCharts/Charts";
import Helmet from "../../Components/Helmet";
import { CustomProgressBar } from "../../Components/HelpingComponents";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const items = [
  {
    key: "0",
    label: <a href="#">Download</a>,
  },
  {
    key: "1",
    label: <a href="#">Share</a>,
  },
];

const HOS = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="p-5">
      <Helmet title={"HOS Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />

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

      <div className="report-chart-container">
        <div className="my-chart">
          <div className="flex-container">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={97.8} text={"97.8"} />
            </div>

            <div className="flex-box">
              <div className="items">
                <p className="faded">Total HOS Violations</p>
                <p className="bold">4</p>
              </div>
              <div className="items">
                <p className="faded">Distance Driven</p>
                <p className="bold">5160 mi</p>
              </div>
              <div className="items">
                <p className="faded">Time Driven</p>
                <p className="bold">82h 58m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-chart">
          <div
            className="flex-container"
            style={{ flexDirection: "column", gap: "10px" }}
          >
            <CustomProgressBar label={"Form & Manner"} />
            <CustomProgressBar label={"Rest"} />
            <CustomProgressBar
              label={"Driving"}
              color={"#96F794"}
              percentage={50}
            />
            <CustomProgressBar label={"Cycle"} />
            <CustomProgressBar
              label={"Duty"}
              color={"#B3B6FA"}
              percentage={50}
            />
          </div>
        </div>

        <div className="my-chart">
        <AreaCharts series={tempSeries} labels={tempLabels} />
        </div>
      </div>
    </section>
  );
};

export default HOS;
