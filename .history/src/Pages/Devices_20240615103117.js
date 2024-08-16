import React, { useState } from "react";

import { LuArrowUpDown } from "react-icons/lu";
import status from "../Assets/Device/status.svg";
const Devices = () => {
  const [selectedTab, setselectedTab] = useState("Active");
  
  const [Action, setAction] = useState(false);
  const toggleaction = () => {
    setAction(!Action);
  };
  return (
    <div className="p-5">
      <div className="text-[28px] font-semibold flex justify-start">
        ELD Devices
      </div>

      <div className="mt-10 flex justify-between">
        <div className=" flex">
          <div
            className={`cursor-pointer ${
              selectedTab === "Active"
                ? "w-[208px]  h-[45px] flex items-center justify-center  gap-2 underline-custom "
                : "w-[208px] h-[45px] flex items-center justify-center   gap-2"
            }`}
            onClick={() => setselectedTab("Active")}
          >
            Active (2)
          </div>
          <div
            className={`cursor-pointer ${
              selectedTab === "Disconnected"
                ? "w-[208px] h-[45px] flex items-center justify-center   gap-2 underline-custom"
                : "w-[208px] h-[45px] flex items-center justify-center   gap-2"
            }`}
            onClick={() => setselectedTab("Disconnected")}
          >
            Disconnected (4)
          </div>
        </div>
      </div>
      <hr className="mt-5" />

      {selectedTab && (
        <div>
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Devices;
