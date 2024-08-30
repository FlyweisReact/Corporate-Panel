/** @format */

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import dot from "../Assets/Dashboard/dot.svg";

const PieChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
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

  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  return (
    <div>
      <div className=" box-shadow  flex flex-col gap-10 rounded-xl bg-white p-6">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
