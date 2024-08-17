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
  const [ids, setIds] = useState([]);
  const [allPushed, setAllPushed] = useState(false);
  const allIds = data?.data?.docs?.map((i) => i?._id);

  const pushInArr = (id) => {
    const alreadyPresent = ids.some((i) => i === id);
    if (alreadyPresent) {
      const filterData = ids.filter((i) => i !== id);
      setIds(filterData);
    } else {
      setIds((prev) => [...prev, id]);
    }
  };
  const checkIfAlreadyPresent = (id) => {
    const isPresent = ids.some((i) => i === id);
    if (isPresent) {
      return true;
    } else {
      return false;
    }
  };
  const pushAll = () => {
    setAllPushed(!allPushed);
    if (allPushed) {
      setIds([]);
    } else {
      setIds(allIds);
    }
  };

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
      <div className="flex gap-2">
        {ids.length > 0 && (
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
        )}

        <button
          className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
          onClick={() => {
            setEdit(false);
            setAddterminal(true);
          }}
        >
          <IoMdAdd style={{ color: "white" }} /> Add Terminals
        </button>
      </div>
    );
  };

  //----
  const activeTableHead = [
    <input type="checkbox" onChange={() => pushAll()} />,
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
    <div className="flex justify-center items-center gap-2">
      Created On (CDT)
      <LuArrowUpDown />
    </div>,
    "Actions",
  ];

  const activeTableCody = data?.data?.docs?.map((i) => [
    <input
      type="checkbox"
      className="checkbox"
      onChange={() => pushInArr(i._id)}
      checked={checkIfAlreadyPresent(i._id)}
    />,
    <div onClick={() => navigate(`/Terminals/${i?._id}`)}> {i?.name} </div>,
    i?.drivers?.length,
    i?.assets?.length,
    i?.timeZone,
    dateFormatter(i?.createdAt),
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
    </Dropdown>,
  ]);

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
        <div className="text-[28px] font-semibold flex justify-start font-large">
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

        {selectedTab === "Active" && (
          <div className="mt-5">
            <TableLayout
              thead={activeTableHead}
              className="vehicle-table mt-5 mb-5"
              tbody={activeTableCody}
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

export default Terminals;
