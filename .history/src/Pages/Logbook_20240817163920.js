/** @format */

import React, { useState } from "react";
import isymbol from "../Assets/Logbook/isymbol.svg";
import refresh from "../Assets/Logbook/refresh.svg";
import statusfilter from "../Assets/Logbook/statusfilter.svg";
import { GoDotFill } from "react-icons/go";
import redisymbol from "../Assets/Logbook/redisymbol.svg";
import dot from "../Assets/Dashboard/dot.svg";
import halfcircle from "../Assets/Dashboard/halfcircle.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { Pagination, Tabs } from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";

const Logbook = () => {
  const [selectedTab, setselectedTab] = useState("Active");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const tabsOptions = [
    {
      value: "Active",
      label: "Active (1)",
    },
    {
      value: "Inactive",
      label: "Inactive (4)",
    },
    {
      value: "All",
      label: "All (4)",
    },
  ];

  const ExtraComponent = () => {
    return (
      <div className="flex items-center gap-2 eld-component">
        <div className="text-[#8E8F8F] font-bold">
          Mode :<span className="text-[#34B7C1]">ELD</span>
        </div>
        <div className="w-[214px] h-[45px] rounded-lg border text-[#8E8F8F] flex justify-center items-center gap-2">
          10:16 PM (EDIT) <img src={refresh} alt="" />
        </div>
      </div>
    );
  };

  const thead = [
    <div className="flex gap-2 items-center ">
      Status <img src={statusfilter} alt="" />
    </div>,
    "Driver | Vehicle",
    "Location | Last Sync",
    "Violations",
    "HOS",
    "Drive Left",
    "Duty Left",
    "Cycle Left",
    "App Status",
  ];

  const tbody = [
    [
      <div
        className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center"
        onClick={() => navigate("/Logbook/1")}
      >
        On{" "}
      </div>,
      "Adam Bhalke powers 2101",
      "powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am",
      <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        00{" "}
      </div>,
      <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
        Ready
        <br />
        00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        11:00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        14:00
      </div>,
      <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        70:00/8
      </div>,
      <div className="flex items-center gap-2">
        <GoDotFill style={{ color: "#A44C4C" }} />
        Offline
        <img src={redisymbol} alt="" />
      </div>,
    ],
    [
      <div className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center">
        On{" "}
      </div>,
      "Adam Bhalke powers 2101",
      "powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am",
      <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        00{" "}
      </div>,
      <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
        Ready
        <br />
        00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        11:00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        14:00
      </div>,
      <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        70:00/8
      </div>,
      <div className="flex items-center gap-2">
        <GoDotFill style={{ color: "#A44C4C" }} />
        Offline
        <img src={redisymbol} alt="" />
      </div>,
    ],
    [
      <div className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center">
        On{" "}
      </div>,
      "Adam Bhalke powers 2101",
      "powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am",
      <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        00{" "}
      </div>,
      <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
        Ready
        <br />
        00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        11:00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        14:00
      </div>,
      <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        70:00/8
      </div>,
      <div className="flex items-center gap-2">
        <GoDotFill style={{ color: "#A44C4C" }} />
        Offline
        <img src={redisymbol} alt="" />
      </div>,
    ],
    [
      <div className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center">
        On{" "}
      </div>,
      "Adam Bhalke powers 2101",
      "powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am",
      <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        00{" "}
      </div>,
      <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
        Ready
        <br />
        00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        11:00
      </div>,
      <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        14:00
      </div>,
      <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
        70:00/8
      </div>,
      <div className="flex items-center gap-2">
        <GoDotFill style={{ color: "#A44C4C" }} />
        Offline
        <img src={redisymbol} alt="" />
      </div>,
    ],
  ];

  return (
    <section className="p-5">
      <div className="font-semibold text-[28px] text-left">Logbook</div>

      <div className="mt-10 flex justify-between section-tab-container">
        <Tabs
          tab={selectedTab}
          setTab={setselectedTab}
          option={tabsOptions}
          ExtraComponent={ExtraComponent}
        />
      </div>

      {selectedTab && (
        <div>
          {selectedTab === "Active" && (
            <>
              <div className="mt-5">
                <TableLayout
                  thead={thead}
                  className="vehicle-table mt-5 mb-5"
                  tbody={tbody}
                />

                <Pagination
                  className={"mt-5"}
                  totalPages={5}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </>
          )}
          {selectedTab === "Inactive" && (
            <>
              <div className="mt-5">
                <table class="border ">
                  <thead>
                    <tr className="bg-[#F0FAFB] h-[65px] ">
                      <th className="w-[180px] flex items-center justify-center h-[65px]">
                        Status <img src={statusfilter} alt="" />
                      </th>
                      <th className="w-[250px] ">Driver | Vehicle </th>
                      <th className="w-[250px]">Location | Last Sync</th>
                      <th className="w-[180px] ">Violations</th>
                      <th className="w-[100px] text-left">HOS</th>
                      <th className="w-[150px] text-left">Drive Left</th>
                      <th className="w-[150px] text-left">Duty Left</th>
                      <th className="w-[150px] text-left">Cycle Left</th>
                      <th className="w-[150px] text-left">App Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
                          Off
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
                          Off
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
                          Off
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
                          Off
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {selectedTab === "All" && (
            <>
              <div className="mt-5">
                <table class="border ">
                  <thead>
                    <tr className="bg-[#F0FAFB] h-[65px] ">
                      <th className="w-[180px] flex items-center justify-center h-[65px]">
                        Status <img src={statusfilter} alt="" />
                      </th>
                      <th className="w-[250px] ">Driver | Vehicle </th>
                      <th className="w-[250px]">Location | Last Sync</th>
                      <th className="w-[180px] ">Violations</th>
                      <th className="w-[100px] text-left">HOS</th>
                      <th className="w-[150px] text-left">Drive Left</th>
                      <th className="w-[150px] text-left">Duty Left</th>
                      <th className="w-[150px] text-left">Cycle Left</th>
                      <th className="w-[150px] text-left">App Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
                          Off
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
                          Off
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center">
                          On{" "}
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="flex justify-center items-center">
                        {" "}
                        <div className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center">
                          On{" "}
                        </div>
                      </td>
                      <td>Adam Bhalke powers 2101</td>
                      <td>
                        powhatan county, VA 23139 us Apr 1, 2024 | 12:18 am
                      </td>
                      <td className="flex justify-center items-center h-[65px]">
                        <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          00{" "}
                        </div>
                      </td>
                      <td>
                        <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full">
                          Ready
                          <br />
                          00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          11:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[56px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          14:00
                        </div>
                      </td>
                      <td>
                        <div className="w-[77px] h-[30px] rounded-2xl bg-[#32D29633] text-white flex justify-center items-center">
                          70:00/8
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <GoDotFill style={{ color: "#A44C4C" }} />
                          Offline
                          <img src={redisymbol} alt="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 justify-between   mt-5">
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
                87%
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />1
              </div>
              <div className="font-semibold">Off </div>
              <div className="font-semibold">Duty</div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/location");
          }}
          className=" box-shadow  flex flex-col gap-10 rounded-xl bg-white p-6"
        >
          <div className="flex font-semibold text-[20px] items-center gap-2">
            <img src={dot} alt="" className="w-[11px] h-[17px]" /># Trucks &
            Vehicles
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src={halfcircle} alt="" />
              <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                87%
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />2
              </div>
              <div className="font-semibold">Parked </div>
            </div>
          </div>
        </div>
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
                87%
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />3
              </div>
              <div className="font-semibold">Off </div>
              <div className="font-semibold">Duty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logbook;
