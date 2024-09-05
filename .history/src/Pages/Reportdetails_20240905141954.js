/** @format */

import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { PopUp } from "../Components/PopUp";
import DateFilter from "../Components/DateFilter";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TableLayout from "../Components/TableLayout";
import { AlertDateSelector } from "../Components/Modal/Modal";
import ReactApexChart from "react-apexcharts";

const Reportdetails = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [open, setOpen] = useState();
  const value = 29;

  const thead = [
    "No",
    "Event",
    "Driver",
    "Vehicle",
    "Time (CDT)",
    "Location",
    "Video",
    "Detail",
  ];

  const tbody = [
    [
      "1" ,
      "Overspeeding"
    ],
    [
      <input type="checkbox" className="checkbox" />,
      "2012",
      "Truck",
      <div className="flex justify-center items-center gap-1">
        <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
          29%
        </div>
        <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
          -30%
        </div>
      </div>,
      "7h 0m 0s",
      <div className="flex justify-center items-center gap-1">
        24h
        <MdOutlineEdit />
      </div>,
      "42h",
      "1,691 mi",
    ],
    [
      <input type="checkbox" className="checkbox" />,
      "2012",
      "Truck",
      <div className="flex justify-center items-center gap-1">
        <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
          29%
        </div>
        <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
          -30%
        </div>
      </div>,
      "7h 0m 0s",
      <div className="flex justify-center items-center gap-1">
        24h
        <MdOutlineEdit />
      </div>,
      "42h",
      "1,691 mi",
    ],
  ];

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
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]);

  const [violationOption] = useState({
    chart: {
      height: 350,
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
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  });

  return (
    <div className="p-4">
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <div className="flex justify-between items-center  flex-column flex-end full-width">
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

        <div className="flex gap-2 flex-column md-padding flex-end full-width ">
          <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Report Action
          </button>
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

      <TableLayout
        thead={thead}
        className="vehicle-table mt-5 mb-5"
        tbody={tbody}
      />
      <PopUp
        title="Date Filter"
        openModal={openPopUp}
        setOpenModal={setOpenPopUp}
      >
        <DateFilter />
      </PopUp>
    </div>
  );
};

export default Reportdetails;
