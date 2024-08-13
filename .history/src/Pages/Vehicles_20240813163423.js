/** @format */

import React, { useEffect, useState } from "react";
import isymbol from "../Assets/Logbook/isymbol.svg";
import { LuArrowUpDown } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { Pagination } from "../Components/HelpingComponents";
import { CreateTruck } from "../Components/Modal/Modal";
import TableLayout from "../Components/TableLayout";
import { CiCircleCheck } from "react-icons/ci";

const Vehicles = () => {
  const [selectedTab, setselectedTab] = useState("Active Truck");
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate("");

  const fetchHandler = () => {
    getApi(endPoints.truck.paginatedTrucks({ page: currentPage }), {
      setResponse: setData,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);




  const thead = [
    <input type="checkbox" />,
    "Vehicle No. | Serial No.",
    "Vehicle Type",
    "Status",
    "Relay Switch",
    "Fault Codes",
    "Driver",
    "Current Location (CDT)",
    "Mode",
    "Documents",
    "Add Date (CDT)",
    "Actions",
  ];

  const tbody = data?.data?.docs?.map((i) => [
    <input type="checkbox" className="checkbox" />,
    <div className="text-left">
      <p className="bold">{i.vehicleNumber}</p>
      <p>----------------</p>
    </div>,
    i?.vehicleType,
    i?.status && (
      <div className="flex items-center  gap-1">
        <GoDotFill style={{ color: "#1dbc60", fontSize: "20px" }} />
        {i?.status}
      </div>
    ),
    i?.relaySwitch?.length > 0 ? "Yes" : "----",
    i?.faultCode && <div className="danger-badge">{i?.faultCode} </div>,
    <div className="client-list">
      Mohammad Ehsan, Talha Shafiq, Adama Quattara, Ahmed Shafique, Theron Don
    </div>,
    <div className="client-list">Thorp , WA , 98946 ,Us</div>,
    i?.vehicleModel,
    <div>
      {i?.registrationNumber && (
        <div className="flex items-center  gap-1">
          <CiCircleCheck style={{ color: "#1dbc60", fontSize: "20px" }} />
          Registration
        </div>
      )}
      {i?.liabilityInsuranceIsEmail === true && (
        <div className="flex items-center  gap-1 mt-1">
          <CiCircleCheck style={{ color: "#1dbc60", fontSize: "20px" }} />
          Liability Insurance
        </div>
      )}
      {i?.cargoInsuranceIsEmail === true && (
        <div className="flex items-center  gap-1 mt-1">
          <CiCircleCheck style={{ color: "#1dbc60", fontSize: "20px" }} />
          Cargo Insurance
        </div>
      )}
    </div>,
    i?.createdAt?.slice(0, 10),
    <i className="fa-solid fa-trash-can"></i>,
  ]);

  return (
    <>
      <CreateTruck
        show={open}
        handleClose={() => setOpen(false)}
        fetchApi={fetchHandler}
      />
      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start">
          Vehicles
        </div>
        <div className="mt-10 flex justify-between">
          <div className=" flex">
            <div
              className={`cursor-pointer ${
                selectedTab === "Active Truck"
                  ? "w-[208px] flex items-center justify-center  gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab("Active Truck")}
            >
              Active(2)
              <img src={isymbol} alt=" " className="w-[15px] h-[15px]" />
            </div>
            <div
              className={`cursor-pointer ${
                selectedTab === " Deleted Truck"
                  ? "w-[208px] flex items-center justify-center   gap-2 underline-custom"
                  : "w-[208px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => setselectedTab(" Deleted Truck")}
            >
              Deativated
            </div>
          </div>
          <div className="">
            <button
              className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
              onClick={() => setOpen(true)}
            >
              <IoMdAdd style={{ color: "white" }} /> Add Truck
            </button>
          </div>
        </div>
        <hr className="mt-1" />

        {selectedTab && (
          <div>
            {selectedTab === "Active Truck" && (
              <>
                <div className="mt-5">
                  <TableLayout
                    thead={thead}
                    className="vehicle-table mt-5 mb-5"
                    tbody={tbody}
                  />
                </div>
              </>
            )}
          </div>
        )}

        {selectedTab && (
          <div>
            {selectedTab === " Deleted Truck" && (
              <>
                <div className="mt-5">
                  <table className="border w-full ">
                    <thead>
                      <tr className="bg-[#F0FAFB] h-[65px]  ">
                        <th className=" w-[180px]  ">
                          <div className="flex items-center justify-center gap-2">
                            Engine Light <LuArrowUpDown />
                          </div>
                        </th>
                        <th className=" w-[198px] text-center">Fault Code</th>
                        <th className="w-[198px]">
                          <div className="flex  items-center justify-center gap-2">
                            First Detection
                            <LuArrowUpDown />
                          </div>
                        </th>
                        <th className="w-[180px] text-center">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="border-b h-[135px] cursor-pointer"
                        onClick={() => navigate("/Vehicledetail/2010")}
                      >
                        <td>
                          <div className="font-semibold flex justify-center items-center pl-2">
                            <GoDotFill
                              style={{ color: "#1E87F0", fontSize: "24px" }}
                            />{" "}
                            ON
                          </div>
                        </td>
                        <td className="text-center font-semibold">
                          SPN: 191, FMI: 9, OC: 1
                        </td>
                        <td className="text-center font-semibold">
                          2022-02-22, 11:12 pm
                        </td>
                        <td className="font-semibold text-center">
                          <p>Transmission Output Shaft Speed.</p>
                          <p className="font-[400]">Abnormal Update Rate.</p>
                        </td>
                      </tr>
                      <tr
                        className="border-b h-[135px] cursor-pointer"
                        onClick={() => navigate("/Vehicledetail/2010")}
                      >
                        <td>
                          <div className="font-semibold flex justify-center items-center pl-2">
                            <GoDotFill
                              style={{ color: "#1E87F0", fontSize: "24px" }}
                            />{" "}
                            ON
                          </div>
                        </td>
                        <td className="text-center font-semibold">
                          SPN: 191, FMI: 9, OC: 1
                        </td>
                        <td className="text-center font-semibold">
                          2022-02-22, 11:12 pm
                        </td>
                        <td className="font-semibold text-center">
                          <p>Transmission Output Shaft Speed.</p>
                          <p className="font-[400]">Abnormal Update Rate.</p>
                        </td>
                      </tr>
                      <tr
                        className="border-b h-[135px] cursor-pointer"
                        onClick={() => navigate("/Vehicledetail/2010")}
                      >
                        <td>
                          <div className="font-semibold flex justify-center items-center pl-2">
                            <GoDotFill
                              style={{ color: "#1E87F0", fontSize: "24px" }}
                            />{" "}
                            ON
                          </div>
                        </td>
                        <td className="text-center font-semibold">
                          SPN: 191, FMI: 9, OC: 1
                        </td>
                        <td className="text-center font-semibold">
                          2022-02-22, 11:12 pm
                        </td>
                        <td className="font-semibold text-center">
                          <p>Transmission Output Shaft Speed.</p>
                          <p className="font-[400]">Abnormal Update Rate.</p>
                        </td>
                      </tr>
                      <tr
                        className="border-b h-[135px] cursor-pointer"
                        onClick={() => navigate("/Vehicledetail/2010")}
                      >
                        <td>
                          <div className="font-semibold flex justify-center items-center pl-2">
                            <GoDotFill
                              style={{ color: "#1E87F0", fontSize: "24px" }}
                            />{" "}
                            ON
                          </div>
                        </td>
                        <td className="text-center font-semibold">
                          SPN: 191, FMI: 9, OC: 1
                        </td>
                        <td className="text-center font-semibold">
                          2022-02-22, 11:12 pm
                        </td>
                        <td className="font-semibold text-center">
                          <p>Transmission Output Shaft Speed.</p>
                          <p className="font-[400]">Abnormal Update Rate.</p>
                        </td>
                      </tr>
                      <tr
                        className="border-b h-[135px] cursor-pointer"
                        onClick={() => navigate("/Vehicledetail/2010")}
                      >
                        <td>
                          <div className="font-semibold flex justify-center items-center pl-2">
                            <GoDotFill
                              style={{ color: "#1E87F0", fontSize: "24px" }}
                            />{" "}
                            ON
                          </div>
                        </td>
                        <td className="text-center font-semibold">
                          SPN: 191, FMI: 9, OC: 1
                        </td>
                        <td className="text-center font-semibold">
                          2022-02-22, 11:12 pm
                        </td>
                        <td className="font-semibold text-center">
                          <p>Transmission Output Shaft Speed.</p>
                          <p className="font-[400]">Abnormal Update Rate.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-5">
                  <div className=" border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                          <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-[#1E87F0] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            1
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            2
                          </a>
                          <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                          >
                            3
                          </a>
                          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                            ...
                          </span>
                          <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                          >
                            6
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            7
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            8
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <Pagination
          className={"mt-5"}
          totalPages={data?.data?.totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Vehicles;
