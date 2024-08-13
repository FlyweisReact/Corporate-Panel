import React, { useState } from "react";

import status from "../Assets/Device/status.svg";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Terminals = () => {
  const [Addterminal, setAddterminal] = useState(false);
  const [Editterminal, setEditterminal] = useState(false);
  const [selectedTab, setselectedTab] = useState("Active Terminals");
  const [Action, setAction] = useState(false);
  const toggleaction = () => {
    setAction(!Action);
  };
  const navigate = useNavigate('')
  return (
    <>
      {Addterminal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl font-semibold text-[#666666]">Add Terminal</h3>

                  <span
                    onClick={() => setAddterminal(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
                <hr />
                <div className="pl-10 pr-10">
                  <div className="mt-5 justify-center flex">
                    <div>
                      <label className="text-[#8E8F8F]">Terminal Name *</label>
                      <br />
                      <input
                        placeholder="Select API Partner"
                        className="placeholder: block w-[475px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=" gap-5 justify-center items-center mt-5 flex">
                    <div>
                      <label className="text-[#8E8F8F]">
                        Terminal Address *
                      </label>
                      <br />
                      <input
                        placeholder="Select Driver from list"
                        className="placeholder: block w-[225px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label className="text-[#8E8F8F]">Timezone*</label>
                      <br />
                      <select className="w-[225px] mt-5 border-b text-[#8E8F8F]">
                        <option>Eastern Time (US & Canada)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 p-5 flex-col justify-center">
                    <div>
                      <label className="text-[#8E8F8F]">
                        Select terminal contact
                      </label>
                      <br />
                      <select className="w-full mt-5 border-b text-[#8E8F8F] ">
                        <option>Select here...</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center mt-10 gap-5 m-5">
                    <button
                      className="text-[#F56C89] w-[180px] h-[45px] bg-white border border-[#F56C89]"
                      onClick={() => setAddterminal(false)}
                    >
                      Cancel
                    </button>
                    <button className="bg-[#34B7C1] w-[180px] h-[45px]  text-white flex justify-center items-center gap-2">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {Editterminal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl font-semibold text-[#666666]">Edit Terminal</h3>

                  <span
                    onClick={() => setEditterminal(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
                <hr />
                <div className="pl-10 pr-10">
                  <div className="mt-5 justify-center flex">
                    <div>
                      <label className="text-[#8E8F8F]">Terminal Name *</label>
                      <br />
                      <input
                        placeholder="Select API Partner"
                        className="placeholder: block w-[475px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=" gap-5 justify-center items-center mt-5 flex">
                    <div>
                      <label className="text-[#8E8F8F]">
                        Terminal Address *
                      </label>
                      <br />
                      <input
                        placeholder="Select Driver from list"
                        className="placeholder: block w-[225px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label className="text-[#8E8F8F]">Timezone*</label>
                      <br />
                      <select className="w-[225px] mt-5 border-b text-[#8E8F8F]">
                        <option>Eastern Time (US & Canada)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 p-5 flex-col justify-center">
                    <div>
                      <label className="text-[#8E8F8F]">
                        Select terminal contact
                      </label>
                      <br />
                      <select className="w-full mt-5 border-b text-[#8E8F8F] ">
                        <option>Select here...</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center mt-10 gap-5 m-5">
                    <button
                      className="text-[#F56C89] w-[180px] h-[45px] bg-white border border-[#F56C89]"
                      onClick={() => setEditterminal(false)}
                    >
                      Cancel
                    </button>
                    <button className="bg-[#34B7C1] w-[180px] h-[45px]  text-white flex justify-center items-center gap-2">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start">
          Terminals
        </div>

        <div className="mt-10 flex justify-between">
          <div className="flex">
            <div
              className={`cursor-pointer ${
                selectedTab === "Active Terminals"
                  ? "w-[208px] flex items-center justify-center  gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Active Terminals")}
            >
              Active Terminals (1)
            </div>
            <div
              className={`cursor-pointer ${
                selectedTab === "Deactivated Terminals"
                  ? "w-[208px] flex items-center justify-center   gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Deactivated Terminals")}
            >
              Deactivated Terminals
            </div>
          </div>
          <div className="">
            <button
              className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
              onClick={() => setAddterminal(true)}
            >
              <IoMdAdd style={{ color: "white" }} /> Add Terminals
            </button>
          </div>
        </div>
        <hr className="mt-5" />

        {selectedTab && (
          <div>
            {selectedTab === "Active Terminals" && (
              <div className="mt-5">
                <table class="border w-full ">
                  <thead>
                    <tr className="bg-[#F0FAFB] h-[65px]  ">
                      <th className="w-[180px] flex items-center gap-2 justify-left pl-2 h-[65px]">
                        <input type="checkbox" />
                        Terminals Name
                        <LuArrowUpDown />
                      </th>
                      <th className="w-[180px]">
                        <div className="flex items-center gap-1 justify-center">
                          Drivers <LuArrowUpDown />
                        </div>
                      </th>
                      <th className="w-[180px]">
                        <div className="flex items-center gap-1 justify-center">
                          Assets <LuArrowUpDown />
                        </div>
                      </th>
                      <th className="w-[180px] text-center">Timezone</th>
                      <th className="flex items-center gap-2 justify-center  h-[65px]">
                        Created On (EDT)
                        <LuArrowUpDown />
                      </th>
                      <th className="w-[180px] text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                
                    <tr className="border-b h-[79px] cursor-pointer">
                      <td className=" pl-2 text-left"  onClick={()=> navigate('/Terminals/1')}>
                        <div>
                          <input type="checkbox" /> Created On (EDT)
                        </div>
                      </td>
                      <td className="text-center">6</td>
                      <td className="text-center">2</td>
                      <td className="text-center">EDT</td>
                      <td className="text-center">Jul 17, 2023 02:28 PM</td>
                      <td>
                        <div
                          className="flex justify-center z-20 relative "
                          onClick={toggleaction}
                        >
                          <HiOutlineDotsVertical />
                        </div>
                      </td>
                      {Action && (
                        <div className="w-[100px] absolute  p-5 flex flex-col gap-2 justify-start items-start  rounded-xl box-shadow right-2 mt-[3rem] z-40 bg-white">
                          <div
                            className="text-[#8E8F8F] cursor-pointer"
                            onClick={() => setEditterminal(true)}
                          >
                            Edit
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

export default Terminals;
