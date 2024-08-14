/** @format */

import React, { useEffect, useState, useCallback } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { Dropdown } from "antd";
import { Pagination, Tabs } from "../Components/HelpingComponents";
import { CreateDriver, EditDriver } from "../Components/Modal/Modal";
import TableLayout from "../Components/TableLayout";
import { returnFullName } from "../utils/utils";

const Drivers = () => {
  const [Editdriver, setEditdriver] = useState(false);
  const [selectedTab, setselectedTab] = useState("Active");
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const fetchHandler = useCallback(() => {
    getApi(endPoints.driver.getAll({ page: currentPage }), {
      setResponse: setData,
    });
  }, [currentPage]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const tabsOptions = [
    {
      value: "Active",
      label: "Active (2)",
    },
    {
      value: "Inactive",
      label: "Inactive (11)",
    },
    {
      value: "Deleted",
      label: "Deleted (5)",
    },
  ];

  const ExtraComponent = () => {
    return (
      <button
        className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
        onClick={() => setOpen(true)}
      >
        <IoMdAdd style={{ color: "white" }} /> Add Driver
      </button>
    );
  };

  //-------
  const activeTableHead = [
    <input type="checkbox" />,
    "Name",
    "Start Date",
    "Cellphone",
    "Unit No",
    "Timezone",
    "License",
    "Mode",
    "Cycle",
    "Restart",
    "Break",
    "Action",
  ];

  console.log(data);
  const activeTableBody = data?.data?.docs?.map((i) => [
    <input type="checkbox" className="checkbox" />,
    returnFullName(i),
    i?.createdAt?.slice(0, 10),
    i?.mobileNumber ? i?.mobileNumber : "---",
    <div className="flex gap-1 items-center justify-center">
      78617
      <i className="fa-solid fa-pen"></i>
    </div>,
    "---",
    i?.license ? i?.license : '---',
    "---",
    i?.cycle ? i?.cycle : '---',
    i?.reStart ? i?.reStart : '---',
    i?.break ? i?.break : '---',
    <Dropdown
      menu={{
        items: [
          {
            label: (
              <div
                className="text-[#8E8F8F] cursor-pointer"
                onClick={() => {
                  setEditdriver(true);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </div>
            ),
            key: "0",
          },

          {
            label: (
              <div className="text-[#F56C89] text-left cursor-pointer">
                <i className="fa-solid fa-trash-can"></i> Delete
              </div>
            ),
            key: "2",
          },
        ],
      }}
      trigger={["click"]}
    >
      <div className="flex justify-center z-20 relative cursor-pointer">
        <HiOutlineDotsVertical />
      </div>
    </Dropdown>,
  ]);

  return (
    <>
      <CreateDriver
        show={open}
        handleClose={() => setOpen(false)}
        fetchApi={fetchHandler}
      />
      <EditDriver show={Editdriver} handleClose={() => setEditdriver(false)} />

      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start">
          Drivers
        </div>

        <Tabs
          setTab={setselectedTab}
          tab={selectedTab}
          option={tabsOptions}
          ExtraComponent={ExtraComponent}
        />

        {selectedTab === "Active" && (
          <div className="mt-5">
            <TableLayout
              thead={activeTableHead}
              className="vehicle-table mt-5 mb-5"
              tbody={activeTableBody}
            />
            <Pagination
              className={"mt-5"}
              totalPages={data?.data?.totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Drivers;
