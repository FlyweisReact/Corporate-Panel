/** @format */

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Tabs } from "../Components/HelpingComponents";
import TableLayout from "../Components/TableLayout";
import { Badge } from "antd";
import { ShareApiKey } from "../Components/Modal/Modal";

const Apisharing = () => {
  const [selectedTab, setselectedTab] = useState("Active");
  const [shareApiKeyPopup, setShareApiKeyPopup] = useState(false);

  const tabOptions = [
    {
      value: "Active",
      label: "Active (1)",
    },
    {
      value: "Expired",
      label: "Expired (0)",
    },
  ];

  const ExtraComponent = () => {
    return (
      <button
        onClick={(e) => setShareApiKeyPopup(true)}
        className="bg-[#34B7C1] w-[173px] flex justify-center items-center gap-2  rounded-lg text-white h-[45px]"
      >
        <IoMdAdd style={{ color: "white" }} /> Share API Key
      </button>
    );
  };

  const activeTableHead = [
    "Shared With",
    "Shared Assest",
    "API Key",
    "API Expiration",
    "Action",
  ];

  const activeTableBody = [
    [
      "Highway",
      "3 Tickets",
      "edf1b700-4a99-47b5-8425-fab0e1b60bd6",
      <span style={{ color: "#800000", fontWeight: "900" }}>
        2024-12-23 18:40:34
      </span>,
      <div className="flex gap-2 items-center justify-center">
        <p
          style={{
            padding: "4px",
            color: "rgb(235, 87, 87)",
            backgroundColor: "#FEEFF0",
            fontWeight: "900",
          }}
        >
          Revoke
        </p>
        <p
          style={{
            padding: "4px",
            color: "rgb(24, 144, 255)",
            backgroundColor: "#FEEFF0",
            fontWeight: "900",
          }}
        >
          Re-Send
        </p>
        <p
          style={{
            padding: "4px",
            color: "rgb(24, 144, 255)",
            backgroundColor: "#FEEFF0",
            fontWeight: "900",
          }}
        >
          Extend Expiration
        </p>
      </div>,
    ],
  ];

  return (
    <>
      <ShareApiKey
        show={shareApiKeyPopup}
        handleClose={() => setShareApiKeyPopup(false)}
      />

      <div className="p-5">
        <div className="text-[28px] font-semibold flex justify-start">
          Location Sharing API Key
        </div>

        <Tabs
          setTab={setselectedTab}
          tab={selectedTab}
          option={tabOptions}
          ExtraComponent={ExtraComponent}
        />

        <div className="mt-5">
          {selectedTab === "Active" && (
            <TableLayout
              thead={activeTableHead}
              className="vehicle-table mt-5 mb-5"
              tbody={activeTableBody}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Apisharing;
