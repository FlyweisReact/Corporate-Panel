/** @format */

import React from "react";
import isymbol from "../Assets/Reports/isymbol.svg";
import { Link, useNavigate } from "react-router-dom";

const data = [
  {
    img: isymbol,
    title: "Critical Event",
    link: "/Reportdetails",
  },
  {
    img  : "../Vector (12).png",
    title : "Dormancy"
  },
  {
    img  : "../Vector (13).png",
    title : "Driver Safety"
  },
  {
    img  : "../Vector (14).png",
    title : "Duty Status"
  },
  {
    img  : "../lucide_edit.png",
    title : "ELD Logbook Edits"
  },
  {
    img  : "../Group (6).png",
    title : " External Battery Health"
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

      <div className="mt-5 flex gap-2 flex-wrap report-cards">
        {data.map((i, index) => (
          <div
            className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center"
            key={index}
            onClick={() => navigate(i.link)}
          >
            <div className="flex flex-col gap-5 items-center">
              <img src={i.img} alt="" className="w-[40px] h-[40px]" />
              <div className="font-semibold text-[20px]"> {i.title} </div>
            </div>
          </div>
        ))}
      
    
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src="../Group (7).png" alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Fuel Efficiency</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src="../carbon_map.png" alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Geofence</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">HOS Compliance</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../Vector (15).png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">Healthmaps</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../carbon_time.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">Idle Time</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../teenyicons_refresh-solid.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">Post-Trip DVIR</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../teenyicons_refresh-solid.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">Pre-Trip DVIR</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../ri_temp-hot-line.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">
              Temprature & Humidity
            </div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../clarity_battery-line.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">
              Tracker Battery Charge
            </div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../ic_twotone-history.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">Trip History</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../Vector (16).png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">
              Unassigned Drive Time
            </div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img
              src="../solar_graph-outline.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="font-semibold text-[20px]">Utilization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
