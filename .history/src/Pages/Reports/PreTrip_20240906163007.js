
import { Dropdown } from "antd";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { AreaCharts, BarChart } from "../../Components/ApexCharts/Charts";
import Helmet from "../../Components/Helmet";
import { Tabs } from "../../Components/HelpingComponents";
import { AlertDateSelector } from "../../Components/Modal/Modal";
import TableLayout from "../../Components/TableLayout";

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
const PreTrip = () => {
  return (
    <div>
      
    </div>
  )
}

export default PreTrip
