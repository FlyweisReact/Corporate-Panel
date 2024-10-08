/** @format */

import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { MenuBar, ViewProfile } from "./Modal/Modal";
import { HiMenuAlt3 } from "react-icons/hi";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { returnFullName } from "../utils/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getApi(endPoints.auth.getProfile, {
      setResponse: setData,
    });
  }, []);


  return (
    <>
      <MenuBar show={show} handleClose={() => setShow(false)} />
      <ViewProfile show={open} handleClose={() => setOpen(false)} data={data?.data} />
      <section className="navbar">
        <div className="right-div">
          <HiMenuAlt3
            size={26}
            style={{ color: "#34B7C1" }}
            className="ham-menu"
            onClick={() => setShow(true)}
          />
          <button>
            SRH LOGISTICS <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="flex items-center gap-8 left-div">
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img src={profile} alt="" />

            <div className="flex flex-col text-[#1F384C]">
              <span className="font-semibold title">
                {" "}
                {returnFullName(data?.data)}{" "}
              </span>
              <span className="desc"> {data?.data?.email} </span>
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
