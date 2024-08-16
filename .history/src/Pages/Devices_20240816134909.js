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
      label: "Active (4)",
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
    [
      "Surrinder Singh      ",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#18A88C] flex justify-center gap-1 items-center m-auto">
        Connected <img src={status} alt="" />
      </div>,
      "2024-08-16, 01:07 am",
    ],
    [
      "Leroy Hawkins      ",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#18A88C] flex justify-center gap-1 items-center m-auto">
        Connected <img src={status} alt="" />
      </div>,
      "2024-08-16, 01:07 am",
    ],
    [
      "Powell William N",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#18A88C] flex justify-center gap-1 items-center m-auto">
        Connected <img src={status} alt="" />
      </div>,
      "2024-08-16, 01:07 am",
    ],
  ];

  const disconnectedThead = [
    [
      "Abdul Shaikh",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#939eb9] flex justify-center gap-1 items-center m-auto">
        Disconnected
      </div>,
      "2024-08-16, 01:07 am",
    ],
    [
      "Theron Don",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#939eb9] flex justify-center gap-1 items-center m-auto">
        Disconnected
      </div>,
      "2024-08-16, 01:07 am",
    ],
    [
      "Theron Don",
      "7C9EBD9F99E6",
      "3AKJHHDR2KSHU7041",
      <div className="w-[139px] h-[34px] bg-[#EDF8F0] rounded-xl text-[#939eb9] flex justify-center gap-1 items-center m-auto">
        Disconnected
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
          <TableLayout
            thead={activeTable}
            className="vehicle-table mt-5 mb-5"
            tbody={tbody}
          />
        </div>
      )}

      {selectedTab === "Disconnected" && (
        <div className="mt-5">
          <TableLayout
            thead={activeTable}
            className="vehicle-table mt-5 mb-5"
            tbody={disconnectedThead}
          />
        </div>
      )}
    </div>
  );
};

export default Devices;
