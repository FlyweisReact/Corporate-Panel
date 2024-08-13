/** @format */

import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

import { LuArrowUpDown } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";


const Drivers = () => {
  const [editunitnumber, setEditunitnumber] = useState(false);
  const [Editdriver, setEditdriver] = useState(false);
  const [selectedTab, setselectedTab] = useState("Active");
  const [Action, setAction] = useState(false);
  const [drivers, setDrivers] = useState({
    data: {
      docs: [],
    },
  });

  const fetchHandler = () => {
    getApi(endPoints.drivers.getAll({}), {
      setResponse: setDrivers,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(drivers);

  const toggleaction = () => {
    setAction(!Action);
  };

  return (
    <>
      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start">
          Drivers
        </div>

        <div className="mt-10 flex justify-between">
          <div className="flex">
            <div
              className={`cursor-pointer ${
                selectedTab === "Active"
                  ? "w-[208px] flex items-center justify-center  gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Active")}
            >
              Active (2)
            </div>
            <div
              className={`cursor-pointer ${
                selectedTab === "Inactive"
                  ? "w-[208px] flex items-center justify-center   gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Inactive")}
            >
              Inactive (4)
            </div>
          </div>
          <div className="">
            <button className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]">
              <IoMdAdd style={{ color: "white" }} /> Add Driver
            </button>
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
                      <th className="w-[180px] flex items-center gap-2 justify-center pl-2 h-[65px]">
                        <input type="checkbox" /> Name <LuArrowUpDown />
                      </th>
                      <th className="w-[180px] text-center ">Start Date</th>
                      <th className="w-[180px] text-center">Cellphone</th>
                      <th className="w-[180px] text-center">Unit No </th>
                      <th className="w-[200px] text-center">Time Zone</th>
                      <th className="w-[180px] text-center">License</th>
                      <th className="w-[180px] text-center">Mode</th>
                      <th className="w-[180px] text-center">Cycle</th>
                      <th className="w-[180px] text-center">Restart</th>
                      <th className="w-[180px] text-center">Break</th>
                      <th className="w-[180px] text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b h-[79px]">
                      <td className="flex gap-2 justify-center h-[79px] items-center pl-2">
                        <input type="checkbox" /> Adam Blake Powers
                      </td>
                      <td className="text-center">2024-03-14</td>
                      <td className="text-center"> 7277 772 772</td>
                      <td>
                        <div className="flex gap-2 items-center justify-center">
                          2101{" "}
                          <MdOutlineEdit
                            onClick={() => setEditunitnumber(true)}
                            className="cursor-pointer"
                          />
                        </div>
                      </td>
                      <td className="text-center">EST</td>
                      <td className="text-center">T67529974</td>
                      <td className="text-center">ELD</td>
                      <td className="text-center">70hrs/8days</td>
                      <td className="text-center">34 hr</td>
                      <td className="text-center">30 min</td>
                      <td>
                        {" "}
                        <div
                          className="flex justify-center z-20 relative cursor-pointer"
                          onClick={toggleaction}
                        >
                          <HiOutlineDotsVertical />
                        </div>
                      </td>
                      {Action && (
                        <div className="w-[100px] absolute  p-5 flex flex-col gap-2 justify-start items-start  rounded-xl box-shadow right-2 mt-[3rem] z-40 bg-white">
                          <div
                            className="text-[#8E8F8F] cursor-pointer"
                            onClick={() => setEditdriver(true)}
                          >
                            Edit
                          </div>
                          <div className="text-[red] cursor-pointer">
                            Delete
                          </div>
                        </div>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Drivers;
