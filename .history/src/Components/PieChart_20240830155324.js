/** @format */

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

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
      <div
        onClick={() => {
          navigate("/Drivers");
        }}
        className=" box-shadow  flex flex-col gap-10 rounded-xl bg-white p-6"
      >
        <div className="flex font-semibold text-[20px] items-center gap-2">
          <img src={dot} alt="" className="w-[11px] h-[17px]" /># Drivers
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <img src={halfcircle} alt="" />
            <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
              {drivers?.data?.totalDocs}
            </div>
          </div>
          <div className="mt-10">
            {/* <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />
                {drivers?.data?.totalDocs}
              </div> */}
            {/* <div className="font-semibold">Off </div>
              <div className="font-semibold">Duty</div> */}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default PieChart;
