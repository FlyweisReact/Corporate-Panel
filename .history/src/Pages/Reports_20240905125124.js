/** @format */

import React from "react";
import isymbol from "../Assets/Reports/isymbol.svg";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: isymbol,
    title: "Critical Event",
    link: "/Reportdetails",
  },
  {
    img: "../Vector (12).png",
    title: "Dormancy",
  },
  {
    img: "../Vector (13).png",
    title: "Driver Safety",
  },
  {
    img: "../Vector (14).png",
    title: "Duty Status",
  },
  {
    img: "../lucide_edit.png",
    title: "ELD Logbook Edits",
  },
  {
    img: "../Group (6).png",
    title: " External Battery Health",
  },
  {
    img: "../Group (7).png",
    title: "Fuel Efficiency",
  },
  {
    img: "../carbon_map.png",
    title: "Geofence",
  },
  {
    img: isymbol,
    title: "HOS Compliance",
  },
  {
    img: "../Vector (15).png",
    title: "Healthmaps",
  },
  {
    img: "../carbon_time.png",
    title: "Idle Time",
  },
  {
    img: "../teenyicons_refresh-solid.png",
    title: "Post-Trip DVIR",
  },
  {
    img: "../teenyicons_refresh-solid.png",
    title: "Pre-Trip DVIR",
  },
  {
    img: "../ri_temp-hot-line.png",
    title: "Temprature & Humidity",
  },
  {
    img: "../clarity_battery-line.png",
    title: "Tracker Battery Charge",
  },
  {
    img: "../ic_twotone-history.png",
    title: "Trip History",
  },
  {
    img: "../Vector (16).png",
    title: "      Unassigned Drive Time",
  },
  {
    img: "../solar_graph-outline.png",
    title: "Utilization",
  },
];

const Reports = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="text-[28px] font-semibold">Reports</div>
        <div>
          <button className="bg-[#34B7C1] px-6 h-[45px] flex items-center gap-2 rounded-lg text-white">
            <img src="../Vector (18).png" alt="" />
            Report History
          </button>
        </div>
      </div>
      <hr className="mt-5" />

      <section className="report-card-container">
 
        {data.map((i, index) => (
          <div
            className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center card"
            key={index}
            onClick={() => navigate(i.link)}
          >
            <div className="flex flex-col gap-5 items-center">
              <img src={i.img} alt="" />
              <div className="font-semibold text-[20px]"> {i.title} </div>
            </div>
          </div>
        ))}
      </div>
      </section>

      <div className="mt-5 flex gap-2 flex-wrap report-cards">
        {data.map((i, index) => (
          <div
            className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center card"
            key={index}
            onClick={() => navigate(i.link)}
          >
            <div className="flex flex-col gap-5 items-center">
              <img src={i.img} alt="" />
              <div className="font-semibold text-[20px]"> {i.title} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
