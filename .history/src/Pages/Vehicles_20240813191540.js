/** @format */

import React, { useEffect, useState, useCallback } from "react";
import { GoDotFill } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteApi, getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { Loader, Pagination } from "../Components/HelpingComponents";
import { CreateTruck } from "../Components/Modal/Modal";
import TableLayout from "../Components/TableLayout";
import { CiCircleCheck } from "react-icons/ci";

const Vehicles = () => {
  const [selectedTab, setselectedTab] = useState("Active Truck");
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");
  const [ids, setIds] = useState([]);

  const pushInArr = (id) => {
    
    setIds((prev) => [...prev, id]);
  };

  console.log(ids);

  const fetchHandler = useCallback(() => {
    getApi(endPoints.truck.paginatedTrucks({ page: currentPage }), {
      setResponse: setData,
    });
  }, [currentPage]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const removeHandler = (id) => {
    deleteApi(endPoints.truck.removeTruck(id), {
      setLoading,
      additionalFunctions: [fetchHandler],
    });
  };

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
    <input
      type="checkbox"
      className="checkbox"
      onChange={() => pushInArr(i._id)}
    />,
    <div
      className="text-left"
      onClick={() => navigate(`/Vehicledetail/${i._id}`)}
    >
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
      {i?.drivers?.map((item) => (
        <span key={i?._id}> {item?.fullName} </span>
      ))}
    </div>,
    <div className="client-list">---</div>,
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
    <i
      className="fa-solid fa-trash-can"
      onClick={() => removeHandler(i?._id)}
    ></i>,
  ]);

  const DeativatedThead = [
    <input type="checkbox" />,
    <div className="text-left">Vehicle No. | Serial No.</div>,
    "Vehicle Type",
    <div className="text-left">Status</div>,
    "Mode",
    "Add Date (CDT)",
    "Delete Date (CDT)",
    "Actions",
  ];

  const DeactivatedTBody = [
    [
      <input type="checkbox" className="checkbox" />,
      <div className="text-left" style={{ display: "block", margin: "auto" }}>
        <p className="bold">778</p>
        <p>4V4NC9EH3JN889465</p>
      </div>,
      "Truck",
      <div className="flex items-center  gap-1">
        <GoDotFill style={{ color: "#1dbc60", fontSize: "20px" }} />
        Connected
      </div>,
      "----",
      "2024-02-19",
      "2024-02-19",
      <p className="text-blue-600 underline">Activate</p>,
    ],
  ];

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
              Active({data?.data?.totalDocs})
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
          <div className="flex gap-2 ">
            <button
              className="bg-[#fff] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
              style={{
                color: "#eb5757",
                border: "1px solid #eb5757",
                fontWeight: 900,
              }}
            >
              <i className="fa-solid fa-trash-can"></i>Deactivate
            </button>

            <button
              className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
              onClick={() => setOpen(true)}
            >
              <IoMdAdd style={{ color: "white" }} /> Add Truck
            </button>
          </div>
        </div>
        <hr className="mt-1" />

        <Loader isLoading={loading} />

        {selectedTab === "Active Truck" && (
          <>
            <div className="mt-5">
              <TableLayout
                thead={thead}
                className="vehicle-table mt-5 mb-5"
                tbody={tbody}
              />
              <Pagination
                className={"mt-5"}
                totalPages={data?.data?.totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </>
        )}

        {selectedTab === " Deleted Truck" && (
          <div className="mt-5">
            <TableLayout
              thead={DeativatedThead}
              className="vehicle-table mt-5 mb-5"
              tbody={DeactivatedTBody}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Vehicles;
