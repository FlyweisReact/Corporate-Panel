/** @format */

import React, { useState, useEffect, useCallback } from "react";
import refresh from "../Assets/Logbook/refresh.svg";
import { GoDotFill } from "react-icons/go";
import redisymbol from "../Assets/Logbook/redisymbol.svg";
import {
  Loader,
  Pagination,
  SectionHeading,
  Tabs,
} from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import PieChart from "../Components/PieChart";
import { returnFullName } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";

const thead = [
  "Status",
  "Driver | Vehicle",
  "Location | Last Sync",
  "Violations",
  "HOS",
  "Drive Left",
  "Duty Left",
  "Cycle Left",
  "App Status",
];

const Logbook = () => {
  const [selectedTab, setselectedTab] = useState("Active");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDrivers, setActiveDrivers] = useState({});
  const [inactiveDriver, setInactiveDriver] = useState({});
  const [deletedDriver, setDeletedDriver] = useState({});
  const [activeVehicle, setActiveVehicles] = useState({});
  const [deactiveVehicle, setDeactiveVehicles] = useState({});
  const [activeUser, setActiveUser] = useState({});
  const [deactiveUser, setDeactiveUser] = useState({});
  const [activeTerminal, setActiveTerminal] = useState({});
  const [deactiveTerminal, setDeactiveTerminal] = useState({});
  const [allDrivers, setAllDrivers] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchActiverDrivers = useCallback(() => {
    getApi(endPoints.drivers.getAllDrivers({ page: currentPage, limit: 5 }), {
      setResponse: setActiveDrivers,
      setLoading,
    });
  }, [currentPage]);

  const fetchAlllDrivers = useCallback(() => {
    getApi(endPoints.drivers.getDriversList({ page: currentPage, limit: 5 }), {
      setResponse: setAllDrivers,
      setLoading,
    });
  }, [currentPage]);

  const fetchInActiveDrivers = useCallback(() => {
    getApi(
      endPoints.drivers.allInactiveDriver({ page: currentPage, limit: 5 }),
      {
        setResponse: setInactiveDriver,
        setLoading,
      }
    );
  }, [currentPage]);

  useEffect(() => {
    if (selectedTab === "Active") {
      fetchActiverDrivers();
    }
  }, [fetchActiverDrivers]);

  useEffect(() => {
    fetchInActiveDrivers();
  }, [fetchInActiveDrivers]);

  useEffect(() => {
    fetchAlllDrivers();
  }, [fetchAlllDrivers]);

  useEffect(() => {
    getApi(endPoints.drivers.allDeletedDriver({}), {
      setResponse: setDeletedDriver,
    });
    getApi(endPoints.vehicles.getActiveVehicle({}), {
      setResponse: setActiveVehicles,
    });
    getApi(endPoints.vehicles.deactiveVehicles({}), {
      setResponse: setDeactiveVehicles,
    });
    getApi(endPoints.users.getUser({}), {
      setResponse: setActiveUser,
    });
    getApi(endPoints.users.getDeactivatedUser({}), {
      setResponse: setDeactiveUser,
    });
    getApi(endPoints.terminals.activeTerminal({}), {
      setResponse: setActiveTerminal,
    });
    getApi(endPoints.terminals.inactiveTerminals({}), {
      setResponse: setDeactiveTerminal,
    });
  }, []);

  const tabsOptions = [
    {
      value: "Active",
      label: `Active (${activeDrivers?.data?.totalDocs})`,
    },
    {
      value: "Inactive",
      label: `Inactive (${inactiveDriver?.data?.totalDocs}) `,
    },
    {
      value: "All",
      label: `All (${allDrivers?.data?.totalDocs})`,
    },
  ];

  const ExtraComponent = () => {
    return (
      <div className="flex items-center gap-2 eld-component">
        <div className="text-[#8E8F8F] font-bold">
          Mode :<span className="text-[#34B7C1]">ELD</span>
        </div>
        <div className="w-[214px] h-[45px] rounded-lg border text-[#8E8F8F] flex justify-center items-center gap-2">
          10:16 PM (EDIT) <img src={refresh} alt="" />
        </div>
      </div>
    );
  };

  const checkStatus = (item) => {
    if (item?.status === "Active") {
      return (
        <div className="w-[53px] h-[30px] rounded-2xl bg-[#1E87F0] text-white flex justify-center items-center">
          On
        </div>
      );
    } else {
      return (
        <div className="w-[53px] h-[30px] rounded-2xl bg-[#F0506E33] text-[#FB6262] flex justify-center items-center">
          Off
        </div>
      );
    }
  };

  const variantGiver = (item) => {
    return (
      <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-black flex justify-center items-center m-auto">
        {item}
      </div>
    );
  };

  const tbody = activeDrivers?.data?.docs?.map((i) => [
    checkStatus(i),
    <Link
      to={`/Logbook/${i?._id}`}
      style={{ color: "blue", textDecoration: "underline", fontWeight: "900" }}
    >
      {returnFullName(i)}{" "}
      {i?.truck?.vehicleNumber ? `| ${i?.truck?.vehicleNumber}` : ""}
    </Link>,
    i?.location?.coordinates?.map((item) => item),
    variantGiver(i?.violations),
    <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full m-auto">
      {i?.hos}
    </div>,
    variantGiver(i?.driveLeft),
    variantGiver(i?.shiftLeft),
    <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-black flex justify-center items-center m-auto">
      {i?.cycleInHrs || 0} hr
    </div>,
    <div className="flex items-center gap-2">
      <GoDotFill style={{ color: "#A44C4C" }} />
      {i?.dutyStatus}
      <img src={redisymbol} alt="" />
    </div>,
  ]);

  const inactiveBody = inactiveDriver?.data?.docs?.map((i) => [
    checkStatus(i),
    <Link
      to={`/Logbook/${i?._id}`}
      style={{ color: "blue", textDecoration: "underline", fontWeight: "900" }}
    >
      {returnFullName(i)}{" "}
      {i?.truck?.vehicleNumber ? `| ${i?.truck?.vehicleNumber}` : ""}
    </Link>,
    i?.location?.coordinates?.map((item) => item),
    variantGiver(i?.violations),
    <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full m-auto">
      {i?.hos}
    </div>,
    variantGiver(i?.driveLeft),
    variantGiver(i?.shiftLeft),
    <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-black flex justify-center items-center m-auto">
      {i?.cycleInHrs || 0} hr
    </div>,
    <div className="flex items-center gap-2">
      <GoDotFill style={{ color: "#A44C4C" }} />
      {i?.dutyStatus}
      <img src={redisymbol} alt="" />
    </div>,
  ]);

  const allBody = allDrivers?.data?.docs?.map((i) => [
    checkStatus(i),
    <Link
      to={`/Logbook/${i?._id}`}
      style={{ color: "blue", textDecoration: "underline", fontWeight: "900" }}
    >
      {returnFullName(i)}{" "}
      {i?.truck?.vehicleNumber ? `| ${i?.truck?.vehicleNumber}` : ""}
    </Link>,
    i?.location?.coordinates?.map((item) => item),
    variantGiver(i?.violations),
    <div className="border-[#1E87F0] flex justify-center items-center text-[8px] border-4 w-[47px] h-[47px] rounded-full m-auto">
      {i?.hos}
    </div>,
    variantGiver(i?.driveLeft),
    variantGiver(i?.shiftLeft),
    <div className="w-[44px] h-[30px] rounded-2xl bg-[#32D29633] text-black flex justify-center items-center m-auto">
      {i?.cycleInHrs || 0} hr
    </div>,
    <div className="flex items-center gap-2">
      <GoDotFill style={{ color: "#A44C4C" }} />
      {i?.dutyStatus}
      <img src={redisymbol} alt="" />
    </div>,
  ]);

  let finalData;
  if (selectedTab === "Active") {
    finalData = tbody;
  } else if (selectedTab === "Inactive") {
    finalData = inactiveBody;
  } else if (selectedTab === "All") {
    finalData = allBody;
  } else {
    finalData = tbody;
  }

  let totalPages;
  if (selectedTab === "Active") {
    totalPages = activeDrivers?.data?.totalPages;
  } else if (selectedTab === "Inactive") {
    totalPages = inactiveBody?.data?.totalPages;
  } else if (selectedTab === "All") {
    totalPages = allDrivers?.data?.totalPages;
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

  return (
    <section className="p-5">
      <SectionHeading title={"Logbook"} />
      <Tabs
        tab={selectedTab}
        setTab={setselectedTab}
        option={tabsOptions}
        ExtraComponent={ExtraComponent}
      />

      <Loader isLoading={loading} />

      <div className="mt-5">
        <TableLayout
          thead={thead}
          className="vehicle-table mt-5 mb-5"
          tbody={finalData}
        />

        <Pagination
          className={"mt-5"}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
        {activeDrivers?.data?.totalDocs &&
          inactiveDriver?.data?.totalDocs &&
          deletedDriver?.data?.totalDocs && (
            <PieChart
              title={"Drivers"}
              link={"/Drivers"}
              labels={["Active", "Inactive", "Deleted"]}
              counts={[
                activeDrivers?.data?.totalDocs || 0,
                inactiveDriver?.data?.totalDocs || 0,
                deletedDriver?.data?.totalDocs || 0,
              ]}
            />
          )}
        {activeTerminal?.data?.totalDocs &&
          deactiveTerminal?.data?.totalDocs && (
            <PieChart
              title={"Terminals"}
              link={"/Terminals"}
              labels={["Active", "Inactive"]}
              counts={[
                activeTerminal?.data?.totalDocs || 0,
                deactiveTerminal?.data?.totalDocs || 0,
              ]}
            />
          )}
        {activeVehicle?.data?.totalDocs && deactiveVehicle?.data?.totalDocs && (
          <PieChart
            title={"Trucks"}
            link={"/vehicles"}
            labels={["Active", "Inactive"]}
            counts={[
              activeVehicle?.data?.totalDocs || 0,
              deactiveVehicle?.data?.totalDocs || 0,
            ]}
          />
        )}
        {activeUser?.data?.totalDocs && deactiveUser?.data?.totalDocs && (
          <PieChart
            title={"Users"}
            link={"/Userroles"}
            labels={["Active", "Inactive"]}
            counts={[
              activeUser?.data?.totalDocs || 0,
              deactiveUser?.data?.totalDocs || 0,
            ]}
          />
        )}
      </div>
    </section>
  );
};

export default Logbook;
