import { useState } from "react";

const Diagnosticevents = () => {
  const [selectedTab, setselectedTab] = useState("Active");

  return (
    <div className="p-5">
      <div className="text-[28px] font-semibold flex justify-start">
        Diagnostic and Malfunction Events
      </div>

      <div className="mt-10 flex justify-between">
        <div className="flex">
          <div
            className={`cursor-pointer ${
              selectedTab === "Active"
                ? "w-[208px] flex items-center justify-center h-[44px]  gap-2 underline-custom"
                : "w-[208px] flex items-center justify-center  h-[44px]   gap-2"
            }`}
            onClick={() => setselectedTab("Active")}
          >
            Active (2)
          </div>
        </div>
      </div>
      <hr className="" />

      <div className="mt-5">
        <table class="border w-full">
          <thead>
            <tr className="bg-[#F0FAFB] h-[65px] ">
              <th className="w-[250px] ">Vehicle</th>
              <th className="w-[250px] ">Event</th>
              <th className="w-[250px]">Date Raised (EDT) </th>
              <th className="w-[250px]">Event Location</th>
              <th className="w-[250px]">Dirver</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Diagnosticevents;
