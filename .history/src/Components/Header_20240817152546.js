/** @format */

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { ViewProfile } from "./Modal/Modal";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ViewProfile show={open} handleClose={() => setOpen(false)} />
      <section className="navbar">
        <div className="right-div">
          <HiMenuAlt3
            size={26}
            style={{ color: "#34B7C1" }}
            className="cursor-pointer"
          />
          <button>
            SRH LOGISTICS <RiArrowDropDownLine size={25} />
          </button>
          <div className="border-[#34B7C1] flex justify-center items-center text-[#34B7C1] border px-6 h-[45px] rounded-lg">
            SRH LOGISTICS <RiArrowDropDownLine size={25} />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img src={profile} alt="" />

            <div className="flex flex-col text-[#1F384C]">
              <span className="font-semibold">SRH LOGISTICS</span>
              <span>DOT #3223344</span>
            </div>
          </div>

          {/* <Notification /> */}
          <div className="App">
            <BiSolidBell
              size={25}
              style={{ color: "#B0C3CC", cursor: "pointer" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
