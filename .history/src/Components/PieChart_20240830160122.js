/** @format */

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import dot from "../Assets/Dashboard/dot.svg";

const PieChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    labels: ["Active", "Inactive", "Pending", "Blocked", "Removed"], // Custom labels for each segment
    dataLabels: {
      enabled: true, // Enable to show custom labels on the chart
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex] + ": " + opts.w.globals.series[opts.seriesIndex];
      },
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    legend: {
      position: "bottom", // Legend position can be adjusted or removed
    },
    annotations: {
      position: "front",
      yaxis: [
        {
          y: 0, // Center position
          text: "Total Drivers", // Custom message
          style: {
            color: "#000", // Text color
            background: "#FFF", // Background color
            border: "1px solid #000", // Optional border
            fontSize: "20px", // Font size
            padding: 10, // Padding
          },
        },
      ],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([14, 15, 10, 5, 20]); // Corresponding values for the custom labels

  return (
    <div>
      <div className="box-shadow flex flex-col gap-10 rounded-xl bg-white p-6">
        <div className="flex font-semibold text-[20px] items-center gap-2">
          <img src={dot} alt="" className="w-[11px] h-[17px]" /># Drivers
        </div>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
