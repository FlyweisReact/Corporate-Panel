/** @format */

import React, { useState } from "react";
import { BarChart, BarHorizontal } from "../../Components/ApexCharts/Charts";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const Geofence = () => {
  const [open, setOpen] = useState(false);

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

  const horizontalBarSeries = [
    {
      data: [8, 2, 3, 7, 5, 2, 4],
    },
  ];

  const horizontalBarLabels = [
    "08/30",
    "08/31",
    "09/01",
    "09/02",
    "09/03",
    "09/04",
    "09/07",
  ];

  const thead = [
    "Geofence Name" ,
    "Category" ,
    "Location" ,
    "Visits" ,
    "Assests" ,
    "Visit Duration" ,
    "Idling" ,
    "Onsite Distance" ,
    "Onsite Stops" ,
    "Last Modified"
  ]

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
            <p className="percentage">35h 36m</p>
            <p className="title">7h 7m/Geofence | 2h 13m/Visit</p>
            <div className="flex-box">
              <div className="items">
                <p className="faded">Assets</p>
                <p className="bold">13</p>
              </div>
              <div className="items">
                <p className="faded">Visits</p>
                <p className="bold">20</p>
              </div>
              <div className="items">
                <p className="faded">Idling</p>
                <p className="bold">3h 32m | 42m/Geofence | 13m/Visit</p>
              </div>
              <div className="items">
                <p className="faded">Onsite Distance</p>
                <p className="bold">
                  273.84mi | 54.77mi/Geofence | 17.12mi/Visit
                </p>
              </div>
              <div className="items">
                <p className="faded">Onsite Stops</p>
                <p className="bold">152 | 30.4/Geofence | 9.5/Visit</p>
              </div>
            </div>
          </div>

          <div className="my-chart">
            <p className="title">Avg Visit Duration By Category</p>
            <BarChart data={salesData} />
          </div>
          <div className="my-chart">
            <p className="title">Visits</p>
            <BarHorizontal
              data={horizontalBarSeries}
              labels={horizontalBarLabels}
            />
          </div>
        </div>

        <TableLayout thead={thead} className="vehicle-table mt-5" tbody={body} />
    
      </div>
    </section>
  );
};

export default Geofence;
