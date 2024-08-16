/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { deleteApi, getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { dateFormatter } from "../utils/utils";
import { Loader, Pagination, Tabs } from "../Components/HelpingComponents";
import { Dropdown } from "antd";
import { CreateTerminal } from "../Components/Modal/Modal";
import TableLayout from "../Components/TableLayout";

const Terminals = () => {
  const [Addterminal, setAddterminal] = useState(false);
  const [selectedTab, setselectedTab] = useState("Active");
  const [data, setData] = useState({ data: { docs: [] } });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevData, setPrevData] = useState({});
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate("");

  const fetchHandler = useCallback(() => {
    getApi(endPoints.terminal.getAll({ page: currentPage }), {
      setResponse: setData,
      setLoading,
    });
  }, [currentPage]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const removeHandler = (id) => {
    deleteApi(endPoints.terminal.remove(id), {
      successMsg: "Removed !",
      additionalFunctions: [fetchHandler],
      setLoading,
    });
  };

  const tabsOptions = [
    {
      value: "Active",
      label: `Active Terminals (${data?.data?.totalDocs})`,
    },
    {
      value: "Deactivated Terminals",
      label: `Deactivated Terminals`,
    },
  ];

  const ExtraComponent = () => {
    return (
      <button
        className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
        onClick={() => {
          setEdit(false);
          setAddterminal(true);
        }}
      >
        <IoMdAdd style={{ color: "white" }} /> Add Terminals
      </button>
    );
  };

  //----
  const activeTableHead = [
    <input type="checkbox" />,
    <div className="flex justify-center items-center gap-2">
      Terminals Name
      <LuArrowUpDown />
    </div>,
    <div className="flex justify-center items-center gap-2">
      Drivers
      <LuArrowUpDown />
    </div>,
    <div className="flex justify-center items-center gap-2">
      Assets
      <LuArrowUpDown />
    </div>,
    "Timezone",
    "",
    <div className="flex justify-center items-center gap-2">
    Created On (CDT)
    <LuArrowUpDown />
  </div>,
    "Actions",
  ];

  return (
    <>
      <CreateTerminal
        show={Addterminal}
        handleClose={() => setAddterminal(false)}
        fetchApi={fetchHandler}
        isEdit={edit}
        prevData={prevData}
      />

      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start">
          Terminals
        </div>

        <Tabs
          setTab={setselectedTab}
          tab={selectedTab}
          option={tabsOptions}
          isBtn={true}
          ExtraComponent={ExtraComponent}
        />
        <Loader isLoading={loading} />

        <TableLayout
          thead={activeTableHead}
          className="vehicle-table mt-5 mb-5"
          tbody={[]}
        />

        {selectedTab === "Active" && (
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
                {data?.data?.docs?.map((i, index) => (
                  <tr className="border-b h-[79px] cursor-pointer" key={index}>
                    <td
                      className=" pl-2 text-left"
                      onClick={() => navigate(`/Terminals/${i?._id}`)}
                    >
                      <div>
                        <input type="checkbox" /> {i?.name}
                      </div>
                    </td>
                    <td className="text-center"> {i?.drivers?.length} </td>
                    <td className="text-center"> {i?.assets?.length} </td>
                    <td className="text-center"> {i?.timeZone} </td>
                    <td className="text-center">
                      {dateFormatter(i?.createdAt)}
                    </td>
                    <td>
                      <Dropdown
                        menu={{
                          items: [
                            {
                              label: (
                                <div
                                  className="text-[#8E8F8F] cursor-pointer"
                                  onClick={() => {
                                    setEdit(true);
                                    setPrevData(i);
                                    setAddterminal(true);
                                  }}
                                >
                                  Edit
                                </div>
                              ),
                              key: "0",
                            },
                            {
                              label: (
                                <div
                                  className="text-[#F56C89] text-left cursor-pointer"
                                  onClick={() => removeHandler(i?._id)}
                                >
                                  Removed
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

export default Terminals;
