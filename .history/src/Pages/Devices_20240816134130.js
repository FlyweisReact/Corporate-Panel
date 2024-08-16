/** @format */

import React, { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import status from "../Assets/Device/status.svg";
import { Tabs } from "../Components/HelpingComponents";

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
    "Driver" , 
    "Serial Number" ,
    "VIN Number" ,
    "Status" ,
    "Last Connected (CDT)"
  ]


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
          <>
            <div className="mt-5">
              <TableLayout
                thead={activeTable}
                className="vehicle-table mt-5 mb-5"
                tbody={[]}
              />
            </div>
          </>
        )}

    </div>
  );
};

export default Devices;
