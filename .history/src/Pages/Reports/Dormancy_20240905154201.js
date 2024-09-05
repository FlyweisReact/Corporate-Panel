/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const Dormancy = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="dormancy-report-page">
      <Helmet title={"Dormancy Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />

      <div className="flex justify-between items-center  flex-column flex-end full-width">
        <div>
          <div className="relative" onClick={() => setOpen(true)}>
            <input
              type="text"
              className="w-[380px] h-[45px] pl-9 border border-[#8E8F8F] rounded-lg p-2 "
              style={{ color: "#8E8F8F" }}
              placeholder="06 Mar, 2024 at 12:00 AM - Today at 11:59 PM"
            />
            <img
              src="../Vector (11).png"
              alt=""
              className="absolute top-3 left-2"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-column md-padding flex-end full-width ">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
              Report Action
            </button>
          </Dropdown>
        </div>
      </div>
    </section>
  );
};

export default Dormancy;
