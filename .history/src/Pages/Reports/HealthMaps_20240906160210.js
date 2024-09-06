/** @format */

import React, { useState } from "react";
import { Tabs } from "../../Components/HelpingComponents";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const HealthMaps = () => {
  const [selectedTabs, setSelectedTabs] = useState("Critical Events");
  const [ open ,setOpen ] = useState(false)

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
    
}

  return (
    <section className="dormancy-report-page p-5 pt-0 pl-0 ">
     <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <Tabs option={tabsOption} setTab={setSelectedTabs} tab={selectedTabs} />
    </section>
  );
};

export default HealthMaps;
