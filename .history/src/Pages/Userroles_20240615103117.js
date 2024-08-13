import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import status from "../Assets/Device/status.svg";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
const Userroles = () => {
  const [adduser, setaddUser] = useState(false);
  const [resetpassword, setResetpassword] = useState(false);
  const [EditUser, setEditUser] = useState(false);
  const [selectedTab, setselectedTab] = useState("Users");
  const [Action, setAction] = useState(false);
  const toggleaction = () => {
    setAction(!Action);
  };
  return (
    <>
      {adduser ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl font-semibold text-[#666666]" >Add User</h3>

                  <span
                    onClick={() => setaddUser(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
                <hr />
                <div className="pl-10 pr-10">
                  <div className=" gap-5 justify-center mt-5 flex">
                    <div>
                      <label className="text-[#8E8F8F]">First name *</label>
                      <br />
                      <input
                        placeholder="First name"
                        className="placeholder: block w-[225px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label className="text-[#8E8F8F]">Last name *</label>
                      <br />
                      <input
                        placeholder="Last name"
                        className="placeholder: block w-[225px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-5 justify-center flex">
                    <div>
                      <label className="text-[#8E8F8F]">
                        Confirm Password *
                      </label>
                      <br />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="placeholder: block w-[475px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5 pl-5 flex-col justify-center">
                    <div>
                      <label className="text-[#8E8F8F]">Role *</label>
                      <br />
                      <select className="w-[400px] border-b text-[#8E8F8F] ">
                        <option>Super Admin</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[#8E8F8F]">Terminal</label>
                      <br />
                      <select className="w-[400px] border-b text-[#8E8F8F] ">
                        <option>SRH Logistic LLC</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center mt-10 gap-5 m-5">
                    <button
                      className="text-[#F56C89] w-[180px] h-[45px] bg-white border border-[#F56C89]"
                      onClick={() => setaddUser(false)}
                    >
                      Cancel
                    </button>
                    <button className="bg-[#34B7C1] w-[180px] h-[45px]  text-white flex justify-center items-center gap-2">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {resetpassword ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl font-semibold text-[#666666]">Reset Password</h3>

                  <span
                    onClick={() => setResetpassword(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
                <hr />
                <div className="pl-10 pr-10">
                  <div className=" gap-5 justify-center mt-5 flex flex-col">
                    <div>
                      <label className="text-[#8E8F8F]">New Password *</label>
                      <br />
                      <input
                        placeholder="Type here...."
                        className="placeholder: block w-[472px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label className="text-[#8E8F8F]">
                        Confirm Password *
                      </label>
                      <br />
                      <input
                        placeholder="Type here...."
                        className="placeholder: block w-[472px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-10 gap-5 m-5">
                    <button
                      className="text-[#F56C89] w-[180px] h-[45px] bg-white border border-[#F56C89]"
                      onClick={() => setResetpassword(false)}
                    >
                      Cancel
                    </button>
                    <button className="bg-[#34B7C1] w-[180px] h-[45px]  text-white flex justify-center items-center gap-2">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {EditUser ? (
      <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="text-xl font-semibold text-[#666666]">Edit User</h3>

              <span
                onClick={() => setEditUser(false)}
                className="cursor-pointer"
              >
                <IoCloseSharp />
              </span>
            </div>
            <hr />
            <div className="pl-10 pr-10">
              <div className=" gap-5 justify-center mt-5 flex">
                <div>
                  <label className="text-[#8E8F8F]">First name *</label>
                  <br />
                  <input
                    placeholder="First name"
                    className="placeholder: block w-[225px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label className="text-[#8E8F8F]">Last name *</label>
                  <br />
                  <input
                    placeholder="Last name"
                    className="placeholder: block w-[225px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-5 justify-center flex">
                <div>
                  <label className="text-[#8E8F8F]">
                    Confirm Password *
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="placeholder: block w-[475px] mt-1  border-b py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-5 flex gap-5 pl-5 flex-col justify-center">
                <div>
                  <label className="text-[#8E8F8F]">Role *</label>
                  <br />
                  <select className="w-[400px] border-b text-[#8E8F8F] ">
                    <option>Super Admin</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#8E8F8F]">Terminal</label>
                  <br />
                  <select className="w-[400px] border-b text-[#8E8F8F] ">
                    <option>SRH Logistic LLC</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center mt-10 gap-5 m-5">
                <button
                  className="text-[#F56C89] w-[180px] h-[45px] bg-white border border-[#F56C89]"
                  onClick={() => setEditUser(false)}
                >
                  Cancel
                </button>
                <button className="bg-[#34B7C1] w-[180px] h-[45px]  text-white flex justify-center items-center gap-2">
                  Reset
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
          User Roles
        </div>

        <div className="mt-10 flex justify-between">
          <div className="flex">
            <div
              className={`cursor-pointer ${
                selectedTab === "Users"
                  ? "w-[208px] flex items-center justify-center  gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Users")}
            >
              Users (1)
            </div>
            <div
              className={`cursor-pointer ${
                selectedTab === "Roles"
                  ? "w-[208px] flex items-center justify-center   gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Roles")}
            >
              Roles (1)
            </div>
          </div>
          <div className="flex gap-2">
            <button className="border-[#F56C89] border w-[173px] flex justify-center items-center gap-2  rounded-lg text-[#F56C89] h-[45px]">
              <IoMdAdd style={{ color: "#F56C89" }} /> Deactivated Users
            </button>
            <button
              className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
              onClick={() => setaddUser(true)}
            >
              <IoMdAdd style={{ color: "white" }} /> Add User
            </button>
          </div>
        </div>
        <hr className="mt-5" />

        {selectedTab && (
          <div>
            {selectedTab === "Users" && (
              <div className="mt-5">
                <table class="border w-full ">
                  <thead>
                    <tr className="bg-[#F0FAFB] h-[65px]">
                      <th className="w-[180px] flex items-center gap-2 justify-center h-[65px]">
                        Name <LuArrowUpDown />
                      </th>
                      <th className="w-[180px]">Email</th>
                      <th className="w-[240px] flex items-center gap-2 justify-center h-[65px]">Roles <LuArrowUpDown /></th>
                      <th className="w-[240px]">Terminals</th>
                      <th className="w-[300px] flex items-center gap-2 justify-center h-[65px]">
                        Session Activity
                        <LuArrowUpDown /> <IoFilterSharp />
                      </th>
                      <th className="w-[180px]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b h-[79px]">
                      <td className=" pl-2 text-left">Muhammad Zurrain</td>
                      <td>Srhlogistics@outlook.com</td>
                      <td>
                        <div className="flex gap-2 items-center justify-center">
                          <div className="w-[162px] h-[34px] bg-[#32D29633] rounded-2xl text-[#18A88C] flex justify-center gap-1 items-center">
                            Supper Admin <img src={status} alt="" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex gap-2 items-center justify-center">
                          <div className="w-[188px] h-[34px] bg-[#32D29633] rounded-2xl text-[#18A88C] flex justify-center  items-center">
                            SRH Logistics LLC
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center justify-center">
                          <div>
                            <GoDotFill style={{ color: "#A44C4C " }} />
                          </div>
                          <div className="flex flex-col items-start">
                            <span>Offline</span>
                            <span>Last logout at 17 Jul, 2023</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="flex justify-center z-20 relative "
                          onClick={toggleaction}
                        >
                          <HiOutlineDotsVertical />
                        </div>
                      </td>
                      {Action && (
                        <div className="w-[172px] absolute  p-5 flex flex-col gap-2 justify-start items-start  rounded-xl box-shadow right-2 mt-[3rem] z-40 bg-white">
                          <div className="text-[#8E8F8F] cursor-pointer" onClick={()=>setEditUser(true)}>
                            Edit
                          </div>
                          <div
                            className="text-[#8E8F8F] text-left cursor-pointer"
                            onClick={() => setResetpassword(true)}
                          >
                            Reset Password
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
      </div>{" "}
    </>
  );
};

export default Userroles;
