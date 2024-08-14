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

  const activeTableBody = data?.data?.docs?.map((i) => [
    <input type="checkbox" className="checkbox" />,
    "Surrinder Singh",
    "2024-07-27",
    "609-582-0833",
    <div className="flex gap-1 items-center justify-center">
      78617
      <i className="fa-solid fa-pen"></i>
    </div>,
    "CST",
    "15598773",
    "ELD",
    "70hrs/8days",
    "34 hr",
    "30 min",
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
                Edit
              </div>
            ),
            key: "0",
          },

          {
            label: (
              <div className="text-[#F56C89] text-left cursor-pointer">
                Delete
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

            <table className="border">
              <thead>
                <tr className="bg-[#F0FAFB] h-[65px]">
                  <th className="w-[180px] flex items-center gap-2 justify-between pl-2 h-[65px]">
                    <span>
                      <input type="checkbox" /> Name
                    </span>{" "}
                    <LuArrowUpDown />
                  </th>
                  <th className="w-[180px] text-center ">Start Date</th>
                  <th className="w-[180px] text-center">Cellphone</th>
                  <th className="w-[180px] text-center">Email Address</th>
                  <th className="w-[180px] text-center">License</th>
                  <th className="w-[180px] text-center">Terminal</th>
                  <th className="w-[180px] text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.docs?.map((i, index) => (
                  <tr className="border-b h-[79px]" key={index}>
                    <td className="flex gap-2 justify-start h-[79px] items-center pl-2">
                      <input type="checkbox" /> {i?.fullName}
                    </td>
                    <td className="text-center">
                      {" "}
                      {i?.createdAt?.slice(0, 10)}{" "}
                    </td>
                    <td className="text-center"> {i.mobileNumber} </td>
                    <td className="text-center"> {i.email} </td>
                    <td className="text-center"> {i.license} </td>
                    <td className="text-center"> {i.terminal} </td>
                    <td>
                      {" "}
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
                                  Edit
                                </div>
                              ),
                              key: "0",
                            },

                            {
                              label: (
                                <div className="text-[#F56C89] text-left cursor-pointer">
                                  Delete
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
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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
