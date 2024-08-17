/** @format */

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { Modal } from "flowbite-react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [ open , setOpen ] = useState(false)

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = () => {
    setOpenModal(!openModal);
  };

  return (
   <>
    
   </>
  );
};

export default Header;
