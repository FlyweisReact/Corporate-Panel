/** @format */

import React, { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import status from "../Assets/Device/status.svg";
import { Tabs } from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";

const Devices = () => {
  const [selectedTab, setselectedTab] = useState("Active");

  const tabsOptions = [
    {
      value: "Active",
      label: "Active (3)",
    },
    {
      value: "Disconnected",
      label: "Disconnected (3)",
    },
  ];

  const activeTable = [
    <div className="flex items-center gap-2 justify-center">
      {" "}
      Driver <LuArrowUpDown />
    </div>,
    "Serial Number",
    "VIN Number",
    "Status",
    <div className="flex items-center gap-2 justify-center">
      Last Connected (CDT) <LuArrowUpDown />
    </div>,
  ];

  const tbody = [
    [
      "Theron Don",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#18A88C] flex justify-center gap-1 items-center m-auto">
        Connected <img src={status} alt="" />
      </div>,
      "2024-08-16, 01:07 am",
    ],
  ];

  return (
    <div className="p-5">
      <div className="text-[28px] font-semibold flex justify-start">
        ELD Devices
      </div>

      <Tabs
        setTab={setselectedTab}
        tab={selectedTab}
        option={tabsOptions}
        isBtn={false}
      />

      {selectedTab === "Active" && (
        <div className="mt-5">
          <table class="border ">
            <thead>
              <tr className="bg-[#F0FAFB] h-[65px]  ">
                <th className="w-[300px] flex items-center gap-2 justify-center pl-2 h-[65px]">
                  Driver <LuArrowUpDown />
                </th>
                <th className="w-[300px]">Serial Number</th>
                <th className="w-[300px] ">VIN Number</th>
                <th className="w-[300px]">Status</th>
                <th className="w-[300px] flex items-center gap-2 justify-center  h-[65px]">
                  Last Connected (EDT)  
                  <LuArrowUpDown />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b h-[79px]">
                <td className="text-center">Muhammad Zurrain</td>
                <td className="text-center">30AEA4827EFE</td>
                <td className="text-center">1XKYD49X4JJ185037</td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <div className="w-[139px] h-[34px] bg-[#32D29633] rounded-2xl text-[#18A88C] flex justify-center gap-1 items-center">
                      Connected <img src={status} alt="" />
                    </div>
                  </div>
                </td>
                <td className="text-center">2023-09-24, 09:13 pm</td>
              </tr>
              <tr className="border-b h-[79px]">
                <td className="text-center">Muhammad Zurrain</td>
                <td className="text-center">30AEA4827EFE</td>
                <td className="text-center">1XKYD49X4JJ185037</td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <div className="w-[139px] h-[34px] bg-[#32D29633] rounded-2xl text-[#18A88C] flex justify-center gap-1 items-center">
                      Connected <img src={status} alt="" />
                    </div>
                  </div>
                </td>
                <td className="text-center">2023-09-24, 09:13 pm</td>
              </tr>
              <tr className="border-b h-[79px]">
                <td className="text-center">Muhammad Zurrain</td>
                <td className="text-center">30AEA4827EFE</td>
                <td className="text-center">1XKYD49X4JJ185037</td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <div className="w-[139px] h-[34px] bg-[#32D29633] rounded-2xl text-[#18A88C] flex justify-center gap-1 items-center">
                      Connected <img src={status} alt="" />
                    </div>
                  </div>
                </td>
                <td className="text-center">2023-09-24, 09:13 pm</td>
              </tr>
            </tbody>
          </table>

          <TableLayout
            thead={activeTable}
            className="vehicle-table mt-5 mb-5"
            tbody={tbody}
          />
        </div>
      )}
    </div>
  );
};

export default Devices;
