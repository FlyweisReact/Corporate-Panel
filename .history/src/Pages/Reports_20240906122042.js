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
    link : "/reports/dormancy-report"
  },
  {
    img: "../Vector (13).png",
    title: "Driver Safety",
    link : "/reports/driver-safety"
  },
  {
    img: "../Vector (14).png",
    title: "Duty Status",
    link : "/reports/duty-status-report"
  },
  {
    img: "../lucide_edit.png",
    title: "ELD Logbook Edits",
    link : "/reports/log-history"
  },
  {
    img: "../Group (6).png",
    title: " External Battery Health",
    link : '/reports/external-battery-health'
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
          <div className="cards" key={index} onClick={() => navigate(i.link)}>
            <img src={i.img} alt="" />
            <p> {i.title} </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reports;
