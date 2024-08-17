/** @format */

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { Modal } from "flowbite-react";
import { ViewProfile } from "./Modal/Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <ViewProfile show={open} handleClose={() => setOpen(false)} />
      <div className="h-[100px] bg-white border-b flex justify-between items-center gap-4 mr-4">
        <div className="border-[#34B7C1] flex justify-center items-center text-[#34B7C1] border px-6 h-[45px] rounded-lg">
          SRH LOGISTICS <RiArrowDropDownLine size={25} />
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
              onClick={toggleDrawer}
            />
            <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
