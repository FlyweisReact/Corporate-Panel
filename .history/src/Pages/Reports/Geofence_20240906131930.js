/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const Geofence = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="p-5 geofence-report pb-5">
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <Helmet title={"Geofence"} />

      <p className="heading">Reports Demo</p>
      <p className="sub-heading">
        You are viewing a TruckX placeholder powered by a sample data set as a
        part of the demo experience!
      </p>

      <div className="bg-white mt-3">
        <div className="full-width" style={{ borderBottom: "1px solid #ddd" }}>
          <div className="p-4">
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
            <p className="title">Total Visit Duration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geofence;
