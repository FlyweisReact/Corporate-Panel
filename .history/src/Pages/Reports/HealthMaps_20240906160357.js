/** @format */

import React, { useState } from "react";
import { Tabs } from "../../Components/HelpingComponents";
import { AlertDateSelector } from "../../Components/Modal/Modal";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const HealthMaps = () => {
  const [selectedTabs, setSelectedTabs] = useState("Critical Events");
  const [open, setOpen] = useState(false);

  const tabsOption = [
    {
      value: "Critical Events",
      label: "Critical Events",
    },
    {
      value: "HOS Stops",
      label: "HOS Stops",
    },
  ];

  const ExtraComponent = () => {
    return (
      <div className="relative" onClick={() => setOpen(true)}>
        <input
          type="text"
          className="w-[380px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
          style={{ color: "#8E8F8F" }}
          placeholder="06 Mar, 2024 at 12:00 AM - Today at 11:59 PM"
        />
        <img
          src="../Vector (11).png"
          alt=""
          className="absolute top-3 left-2"
        />
      </div>
    );
  };

  return (
    <section className="dormancy-report-page p-5 pt-0 pl-0 ">
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <Tabs
        option={tabsOption}
        setTab={setSelectedTabs}
        tab={selectedTabs}
        ExtraComponent={ExtraComponent}
      />
    </section>
  );
};

export default HealthMaps;
