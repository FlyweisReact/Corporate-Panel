/** @format */

import React, { useState } from "react";
import { Tabs } from "../../Components/HelpingComponents";

const HealthMaps = () => {
  const [selectedTabs, setSelectedTabs] = useState("Critical Events");

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

  return (
    <section className="dormancy-report-page p-5 pt-0 pl-0 ">
      <Tabs option={tabsOption} setTab={setSelectedTabs} tab={selectedTabs} />
    </section>
  );
};

export default HealthMaps;
