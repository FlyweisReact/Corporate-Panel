/** @format */

import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import TableLayout from "../Components/TableLayout";

const Trackinglinks = () => {
  const thead = [
    <div className="flex justify-center items-center gap-2">
      Load ID <IoFilterSharp />
    </div>,
    "Vehicle Number" ,
    "Vehicle Type" ,
    "Pickup Date (ETD)" ,
    "Delivery Date (ETD)",
    "Broker/Shiper Name"
  ];
  return (
    <div className="p-5">
      <div className="text-[28px] font-semibold flex justify-start">
        Tracking Links
      </div>

      <TableLayout
        thead={thead}
        className="vehicle-table mt-5 mb-5"
        tbody={[]}
      />

      <div className="mt-5">
        <table class="border ">
          <thead>
            <tr className="bg-[#F0FAFB] h-[65px]  ">
              <th className="w-[200px] flex items-center gap-2 justify-center pl-2 h-[65px]">
                Load ID <IoFilterSharp />
              </th>
              <th className="w-[200px]">Vehicle Number</th>
              <th className="w-[200px]">Vehicle Type</th>
              <th className="w-[200px]">Pickup Date (ETD)</th>
              <th className="w-[200px] ">Delivery Date (ETD)</th>
              <th className="w-[200px]">Broker/Shiper Name</th>
              <th className="w-[200px]">Broker/Shiper Email</th>
              <th className="w-[200px]">Shared Link</th>
              <th className="w-[200px] flex items-center gap-2 justify-center pl-2 h-[65px]">
                Action
                <IoFilterSharp />
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Trackinglinks;
