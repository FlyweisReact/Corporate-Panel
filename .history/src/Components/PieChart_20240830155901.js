/** @format */

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import dot from "../Assets/Dashboard/dot.svg";

const PieChart = () => {
  const [options] = useState({
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false, // This hides the labels inside the donut
    },
    legend: {
      show: false,
    },
  });

  const [series] = useState([14]);
  return (
    <div>
      <div className=" box-shadow  flex flex-col gap-10 rounded-xl bg-white p-6">
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
