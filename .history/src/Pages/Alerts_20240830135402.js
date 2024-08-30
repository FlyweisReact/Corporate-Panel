/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { IoCloseSharp, IoFilterOutline } from "react-icons/io5";
import DateFilter from "../Components/DateFilter";
import { Pagination, SectionHeading } from "../Components/HelpingComponents";
import { AlertDateSelector } from "../Components/Modal/Modal";
import TableLayout from "../Components/TableLayout";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { returnFullName } from "../utils/utils";

const Alerts = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [data, setData] = useState({ data: { docs: [] } });
  const [currentPage, setCurrentPage] = useState(1);
  const [ open ,setOpen ] = useState(false)

  const fetchHandler = useCallback(() => {
    getApi(endPoints.alert.getAll({ page: currentPage }), {
      setResponse: setData,
    });
  }, [currentPage]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  console.log(data);

  const alertHead = [
    "Time (CDT)",
    <div className="flex  items-center justify-center gap-2">
      Event
      <IoFilterOutline />
    </div>,
    "Driver",
    <div className="flex  items-center justify-center gap-2">
      Vehicle
      <IoFilterOutline />
    </div>,
    "Location",
  ];
  const alertBody = data?.data?.docs?.map((i) => [
    <div>
      <div className="text-[#34B7C1] px-8 py-1 w-fit rounded-3xl bg-[#D3F8EA] m-auto">
        {i?.date}
      </div>
      {i?.time}
    </div>,
    i?.event,
    returnFullName(i?.driver),
    i?.truck?.vehicleNumber,
    i?.location,
  ]);

  return (
    <div className="p-5">
    <AlertDateSelector show={open} handleClose={() => set} />
      <SectionHeading title={"Alerts"} />
      <div className="flex justify-between items-center mt-5 flex-column">
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-[380px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
              style={{ color: "#8E8F8F" }}
              placeholder="06 Mar, 2024 at 12:00 AM - Today at 11:59 PM"
            />
            <img
              src="../Vector (11).png"
              alt=""
              onClick={() => setOpenPopUp(true)}
              className="absolute top-3 left-2"
            />
          </div>
        </div>
        <div className="driver-actions-btn flex sm-padding">
          <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Download
          </button>
        </div>
      </div>

      <TableLayout
        thead={alertHead}
        className="vehicle-table mt-5 mb-5"
        tbody={alertBody}
      />
      <Pagination
        className={"mt-5"}
        totalPages={data?.data?.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {openPopUp ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full px-5 pb-4 bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between py-5 rounded-t">
                  <h3 className="text-xl font-semibold text-black">
                    Date Filter
                  </h3>

                  <span
                    onClick={() => setOpenPopUp(false)}
                    className="cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
                <hr className="mb-4" />
                <DateFilter />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Alerts;
