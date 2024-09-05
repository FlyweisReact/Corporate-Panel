/** @format */
import React, { useState } from "react";
import { PopUp } from "../Components/PopUp";
import DateFilter from "../Components/DateFilter";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TableLayout from "../Components/TableLayout";
import { AlertDateSelector } from "../Components/Modal/Modal";
import ReactApexChart from "react-apexcharts";
import { Dropdown } from "antd";

const items = [
  {
    key: "0",
    label: <a href="#">Download</a>,
  },
];

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
      "1",
      "Overspeeding",
      "Farhan Raja",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 81, Montgomery County, Virginia, 24087",
      "---",
      "View",
    ],
    [
      "2",
      "Overspeeding",
      "Surrinder Singh",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 64, Boyd County, Kentucky, 41129",
      "---",
      "View",
    ],
    [
      "3",
      "Overspeeding",
      "Farhan Raja",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 81, Montgomery County, Virginia, 24087",
      "---",
      "View",
    ],
    [
      "4",
      "Overspeeding",
      "Surrinder Singh",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 64, Boyd County, Kentucky, 41129",
      "---",
      "View",
    ],
    [
      "5",
      "Overspeeding",
      "Farhan Raja",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 81, Montgomery County, Virginia, 24087",
      "---",
      "View",
    ],
    [
      "6",
      "Overspeeding",
      "Surrinder Singh",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 64, Boyd County, Kentucky, 41129",
      "---",
      "View",
    ],
    [
      "7",
      "Overspeeding",
      "Farhan Raja",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 81, Montgomery County, Virginia, 24087",
      "---",
      "View",
    ],
    [
      "8",
      "Overspeeding",
      "Surrinder Singh",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 64, Boyd County, Kentucky, 41129",
      "---",
      "View",
    ],
    [
      "9",
      "Overspeeding",
      "Surrinder Singh",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 64, Boyd County, Kentucky, 41129",
      "---",
      "View",
    ],
    [
      "10",
      "Overspeeding",
      "Surrinder Singh",
      78618,
      "Sep 04, 2024 | 1:38 AM",
      "I 64, Boyd County, Kentucky, 41129",
      "---",
      "View",
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
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
              Report Action
            </button>
          </Dropdown>
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
