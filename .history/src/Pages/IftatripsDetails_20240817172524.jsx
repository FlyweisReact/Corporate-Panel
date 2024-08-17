/** @format */

import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { PopUp } from "../Components/PopUp";
import DateFilter from "../Components/DateFilter";
import TableLayout from "../Components/TableLayout";

const IftatripsDetails = () => {
  const [active, setActive] = useState(0);
  const [activeId, setActiveId] = useState(0);
  const [openPopUp1, setOpenPopUp1] = useState(false);
  const [openPopUp2, setOpenPopUp2] = useState(false);

  const thead = [
    "Date(ETD)State",
    "Start Odometer",
    "End Odometer",
    "Distance(miles)",
    "Gallons",
    "Actions",
  ];

  const tbody = [
    [
      "2023-04-04 Alabama",
      "12345",
      "12345",
      "223",
      "0(Add)",
      "Edit | View Route",
    ],
  ];

  return (
    <div className="p-5">
      <div className="font-semibold text-[20px] flex justify-start">
        IFTA Trips
      </div>
      <div className="mt-5 bg-[#FEF3C7] h-[85px] border  border-[#CA8A04] flex justify-center items-center gap-2 rounded-lg">
        <IoMdInformationCircleOutline style={{ color: "#A44C4C" }} />
        <div>
          <span className="font-semibold">Important:</span> IFTA will work if
          and only if driver has vehicle assigned and device is connected to
          logbook app while driving
        </div>
      </div>
      <div className="flex gap-4 mt-5 ifta-trips-detail">
        <div className="w-[350px] h-[500px] bg-white rounded-lg box-shadow p-5 vehicle-list">
          <div className="text-[28px] font-semibold text-left title">
            Vehicles
          </div>
          <div className="text-[#858B9A] text-[20px] text-left desc">
            Please select a vehicle to view individual reports.
          </div>

          <div>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                  <FaSearch style={{ color: "black" }} />
                </span>
              </div>
              <input
                type="text"
                className="placeholder: ml-2 block w-[300px] bg-[#F9F9F9] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Vehicle search "
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div
              onClick={() => setActive(0)}
              className={`${
                active === 0
                  ? "w-[173px] h-[45px] cursor-pointer bg-[#34B7C1] text-white flex justify-center items-center rounded-l-lg"
                  : "w-[173px] h-[45px] bg-[#F4F4F4] text-[#C5C5C5] flex justify-center items-center rounded-r-lg"
              }`}
            >
              Active Vehicles
            </div>
            <div
              onClick={() => setActive(1)}
              className={`${
                active === 1
                  ? "w-[173px] h-[45px] cursor-pointer bg-[#34B7C1] text-white flex justify-center items-center rounded-l-lg"
                  : "w-[173px] h-[45px] bg-[#F4F4F4] text-[#C5C5C5] flex justify-center items-center rounded-r-lg"
              }`}
            >
              Deleted Vehicles
            </div>
          </div>
          <div className="border mt-5 rounded-2xl h-[192px]">
            <div
              onClick={() => setActiveId(1)}
              className={`${
                activeId === 1
                  ? "flex justify-start p-5 border-b bg-[#34B7C1] text-white items-center gap-5"
                  : "flex justify-start p-5 border-b items-center gap-5"
              }`}
            >
              <div className="border border-[#34B7C1] h-[50px] w-[50px] flex justify-center items-center rounded-full bg-[#EFF6FF] text-[#34B7C1]">
                1
              </div>
              2101
            </div>
            <div
              onClick={() => setActiveId(2)}
              className={`${
                activeId === 2
                  ? "flex justify-start p-5 border-b bg-[#34B7C1] text-white items-center gap-5"
                  : "flex justify-start p-5 border-b items-center gap-5"
              }`}
            >
              <div className="border border-[#34B7C1] h-[50px] w-[50px] flex justify-center items-center rounded-full bg-[#EFF6FF] text-[#34B7C1]">
                2
              </div>
              2201
            </div>
          </div>
        </div>
        <div className="remaining-list">
          <div className="h-[85px] w-[820px] rounded-lg bg-[#DBEAFE] font-semibold border border-[#93C5FD] flex justify-center items-center gap-2 alert">
            <IoMdInformationCircleOutline style={{ color: "#93C5FD" }} />{" "}
             Please select a vehicle to view individual reports.
          </div>
          <img src="../image 8.png" alt="" className="" />
          <div className="mt-5">
            <div className="m-5  flex justify-between items-center filters">
              <div
                className="relative"
                onClick={() => {
                  setOpenPopUp1(true);
                }}
              >
                <input
                  type="text"
                  className="w-[297px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
                  style={{ color: "#8E8F8F" }}
                  placeholder="06 Mar, 2024 at 12:00 AM"
                />
                <img
                  src="../Vector (11).png"
                  alt=""
                  className="absolute top-3 left-2"
                />
              </div>
              <div
                className="relative"
                onClick={() => {
                  setOpenPopUp2(true);
                }}
              >
                <input
                  type="text"
                  className="w-[297px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
                  style={{ color: "#8E8F8F" }}
                  placeholder="06 Mar, 2024 at 12:00 AM"
                />
                <img
                  src="../Vector (11).png"
                  alt=""
                  className="absolute top-3 left-2"
                />
              </div>

              <div>
                <select className="border-[#8E8F8F] border rounded-lg w-[117px] h-[45px]">
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>PDF</option>
                </select>
              </div>
              <button className="w-[76px] h-[45px] bg-[#34B7C1] text-white rounded-lg">
                Go
              </button>
            </div>

            <TableLayout
              thead={thead}
              className="vehicle-table mt-5 mb-5"
              tbody={tbody}
            />

       
          </div>
        </div>
      </div>
      <PopUp
        title="Date Filter"
        openModal={openPopUp1}
        setOpenModal={setOpenPopUp1}
      >
        <DateFilter />
      </PopUp>
      <PopUp
        title="Date Filter"
        openModal={openPopUp2}
        setOpenModal={setOpenPopUp2}
      >
        <DateFilter />
      </PopUp>
    </div>
  );
};

export default IftatripsDetails;
