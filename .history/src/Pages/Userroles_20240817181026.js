/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { getApi, putApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import {
  CreateNewUser,
  EditUserDetails,
  ResetUserPassword,
} from "../Components/Modal/Modal.js";
import { Dropdown } from "antd";
import { Loader, Pagination, Tabs } from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";
import { returnFullName } from "../utils/utils";
import { GoDotFill } from "react-icons/go";

const Userroles = () => {
  const [adduser, setaddUser] = useState(false);
  const [resetpassword, setResetpassword] = useState(false);
  const [EditUser, setEditUser] = useState(false);
  const [selectedTab, setselectedTab] = useState("Active");
  const [users, setUsers] = useState({ data: {} });
  const [prevDetail, setPrevDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(() => {
    getApi(endPoints.user.getUsers({ limit: 10, page: currentPage }), {
      setResponse: setUsers,
      setLoading,
    });
  }, [currentPage]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Deactivate User  function
  const deativeUserHandler = (id) => {
    putApi(
      endPoints.user.deactivateUser(id),
      {},
      {
        successMsg: "Success !",
        setLoading,
        additionalFunctions: [fetchUsers],
      }
    );
  };

  const tabsOptions = [
    {
      value: "Active",
      label: `Active (${users?.data?.totalDocs})`,
    },
    {
      value: "Deactivated",
      label: "Deactivated",
    },
  ];

  const ExtraComponent = () => {
    return (
      <div className="flex driver-actions-btn">
        <button
          className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
          onClick={() => setaddUser(true)}
        >
          <IoMdAdd style={{ color: "white" }} /> Add User
        </button>
      </div>
    );
  };

  const activeTableHead = [
    <div className="flex justify-center items-center gap-2">
      Name <LuArrowUpDown />
    </div>,
    "Email",
    <div className="flex justify-center items-center gap-2">
      Roles <LuArrowUpDown />
    </div>,
    <div className="flex justify-center items-center gap-2">
      Terminals <LuArrowUpDown />
    </div>,
    <div className="flex justify-center items-center gap-2">
      Session Activity <LuArrowUpDown />
    </div>,
    "Actions",
  ];

  const activeTableBody = users?.data?.docs?.map((i) => [
    returnFullName(i),
    i?.email,
    i?.userType && (
      <div className="w-[162px] h-[34px] bg-[#32D29633] rounded-xl text-[#18A88C] flex justify-center gap-1 items-center m-auto">
        {i?.userType}
      </div>
    ),
    i?.terminal && (
      <div className="flex gap-2 items-center justify-center">
        <div className="w-[188px] h-[34px] bg-[#32D29633] rounded-2xl text-[#18A88C] flex justify-center  items-center">
          {i?.terminal}
        </div>
      </div>
    ),
    <div className="flex items-center justify-center">
      <div>
        <GoDotFill style={{ color: "#A44C4C " }} />
      </div>
      <div className="flex flex-col items-start">
        <span>Offline</span>
        <span>Last logout at 17 Jul, 2023</span>
      </div>
    </div>,
    <Dropdown
      menu={{
        items: [
          {
            label: (
              <div
                className="text-[#8E8F8F] cursor-pointer"
                onClick={() => {
                  setPrevDetails(i);
                  setEditUser(true);
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
                className="text-[#8E8F8F] text-left cursor-pointer"
                onClick={() => {
                  setPrevDetails(i);
                  setResetpassword(true);
                }}
              >
                Reset Password
              </div>
            ),
            key: "1",
          },
          {
            label: (
              <div
                className="text-[#F56C89] text-left cursor-pointer"
                onClick={() => deativeUserHandler(i?._id)}
              >
                {i?.status === "inActive" ? "Activate User" : "Deactivate User"}
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
      <CreateNewUser
        handleClose={() => setaddUser(false)}
        show={adduser}
        fetchApi={fetchUsers}
      />
      <ResetUserPassword
        open={resetpassword}
        handleCancel={() => setResetpassword(false)}
        userId={prevDetail?._id}
        fetchApi={fetchUsers}
      />
      <EditUserDetails
        show={EditUser}
        handleClose={() => setEditUser(false)}
        userId={prevDetail?._id}
        fetchApi={fetchUsers}
        prevData={prevDetail}
      />
      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start font-large">
          User Roles
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
              tbody={activeTableBody}
            />
            <Pagination
              className={"mt-5"}
              totalPages={users?.data?.totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default Userroles;
