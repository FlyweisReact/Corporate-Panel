/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const Dormancy = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="dormancy-report-page p-5">
      <Helmet title={"Dormancy Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />

      <div className="full-width">
        <div>
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
      </div>

      <div className="report-chart-container">
        <div className="my-chart">
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={value} text={`${value}`} />
          </div>
          <p className="font-bold">Avg. Hours Used/Day: 6hr</p>
        </div>

        <div className="my-chart  chart-container">
          <ReactApexChart
            options={overspeedingOption}
            series={series}
            type="pie"
          />
        </div>
        <div className="my-chart  chart-container">
          <ReactApexChart
            options={violationOption}
            series={violationSeries}
            type="area"
          />
        </div>
      </div>
    </section>
  );
};

export default Dormancy;
