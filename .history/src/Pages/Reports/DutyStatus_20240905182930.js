/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector, EditThreshold } from "../../Components/Modal/Modal";
import ReactApexChart from "react-apexcharts";
import TableLayout from "../../Components/TableLayout";
import { CircularProgressbar } from "react-circular-progressbar";

const DutyStatus = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // --- overspeeding chart
  const [series] = useState([100]);
  const [overspeedingOption] = useState({
    chart: {
      type: "pie",
    },
    labels: ["Overspeeding"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  });

  // --- violation day
  const [violationSeries] = useState([
    {
      name: "series1",
      data: [1122, 750, 350, 750, 780, 1000, 200],
    },
  ]);

  const [violationOption] = useState({
    chart: {
      height: 350,
      width: 400,
      type: "area",
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 0,
      max: 1122,
    },
    xaxis: {
      categories: [
        "Aug 29",
        "Aug 30",
        "Aug 31",
        "Sep 1",
        "Sep 2",
        "Seo 3",
        "Sep 4",
        "Sep 5",
        "Sep 6",
      ],
      title: {
        text: "",
      },
    },
  });

  const thead = [
    <input type={"checkbox"} />,
    "Driver Name",
    "Safety Score",
    "Miles Driven",
    "Total Hours Driven",
    "Total Violation",
    "Speeding",
    "Safety Events",
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

  const value = 100;

  const [chartData] = useState({
    series: [
      {
        name: "sales",
        data: [
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/04/01",
            y: 430,
          },
          {
            x: "2019/07/01",
            y: 448,
          },
          {
            x: "2019/10/01",
            y: 470,
          },
          {
            x: "2020/01/01",
            y: 540,
          },
          {
            x: "2020/04/01",
            y: 580,
          },
          {
            x: "2020/07/01",
            y: 690,
          },
          {
            x: "2020/10/01",
            y: 690,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
        toolbar : false
      },
      xaxis: {
        type: "category",
        group: {
          style: {
            fontSize: "10px",
            fontWeight: 700,
          },
          groups: [
            { title: "2019", cols: 4 },
            { title: "2020", cols: 4 },
          ],
        },
      },
    },
  });

  return (
    <section className="dormancy-report-page p-5">
      <Helmet title={"Duty Status Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <EditThreshold show={show} handleClose={() => setShow(false)} />

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
          <div className="flex-container">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={value} text={`${value}`} />
            </div>
            <div className="flex-box">
              <div className="items">
                <p className="faded">Total Dwell Time</p>
                <p className="bold">0</p>
              </div>
              <div className="items">
                <p className="faded">Distance Driven</p>
                <p className="bold">5543 mi</p>
              </div>
              <div className="items">
                <p className="faded">Time Driven</p>
                <p className="bold">100h 35m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
            />
      
        </div>

        <div className="my-chart">
            <ReactApexChart
              options={violationOption}
              series={violationSeries}
              type="area"
            />
        </div>
      </div>

      <TableLayout thead={thead} className="vehicle-table mt-5" tbody={body} />
    </section>
  );
};

export default DutyStatus;
