/** @format */

import React from "react";
import { Tabs } from "../../Components/HelpingComponents";

const HealthMaps = () => {
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

  return   <section className="dormancy-report-page p-5">
        <Tabs option={tabs} />
     </section>;
};

export default HealthMaps;
