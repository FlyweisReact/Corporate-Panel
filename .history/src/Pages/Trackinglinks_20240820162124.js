/** @format */

import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { SectionHeading } from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";

const Trackinglinks = () => {
  const thead = [
    "Load ID",
    "Vehicle Number",
    "Vehicle Type",
    "Pickup Date (ETD)",
    "Delivery Date (ETD)",
    "Broker/Shiper Name",
    "Droker/Shiper Email",
    "Shared Link",
    "Action",
  ];
  return (
    <div className="p-5">
      <div className="text-[28px] font-semibold flex justify-start">
        Tracking Links
      </div>

      <SectionHeading title={"Tra"} />

      <TableLayout
        thead={thead}
        className="vehicle-table mt-5 mb-5"
        tbody={[]}
      />
    </div>
  );
};

export default Trackinglinks;
