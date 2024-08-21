/** @format */

import { useCallback, useEffect, useState } from "react";
import { Pagination, SectionHeading } from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

const Diagnosticevents = () => {
  const [selectedTab, setselectedTab] = useState("Active");
  const [data, setData] = useState({ data: { docs: [] } });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchHandler = useCallback(() => {
    getApi(endPoints.diagnosisMalfunction.getAll({ page: currentPage }), {
      setResponse: setData,
    });
  }, [currentPage]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  console.log(data.data.docs);

  const thead = ["Vehicle", "Event", "Date Raised", "Event Location", "Driver"];

  const tbody = data?.data?.docs?.map((i) => [
    i?.truck?.vehicleNumber,
    i?.event,
    i?.date,
    i?.location,
    i?.driver?.fullName,
  ]);


  const tabsOptions = [
    {
      value : "Active",
      label : `Active (${data.data.docs})`
    }
  ]

  return (
    <div className="p-5">
      <SectionHeading title={"Diagnostic and Malfunction Events"} />
        <Tabs

      <div className="mt-10 flex justify-between">
        <div className="flex">
          <div
            className={`cursor-pointer ${
              selectedTab === "Active"
                ? "w-[208px] flex items-center justify-center h-[44px]  gap-2 underline-custom"
                : "w-[208px] flex items-center justify-center  h-[44px]   gap-2"
            }`}
            onClick={() => setselectedTab("Active")}
          >
            Active ({data?.data?.docs?.length})
          </div>
        </div>
      </div>
      <hr className="" />

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
    </div>
  );
};

export default Diagnosticevents;
