import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BsPlayBtn } from "react-icons/bs";
import Drawer from "./Drawer";
import { Modal } from "flowbite-react";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const [isFeature, setisFeature] = useState(false);

  const toggleDropdown = () => {
    setOpenModal(!openModal);
  };


  return (
    <div className="h-[100px] bg-white border-b flex justify-between items-center gap-4 mr-4">
      <div className="border-[#34B7C1] flex justify-center items-center text-[#34B7C1] border px-6 h-[45px] rounded-lg">
        SRH LOGISTICS <RiArrowDropDownLine size={25} />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex gap-1 cursor-pointer" onClick={toggleDropdown}>
          <img src={profile} alt=""  />

          <div className="flex flex-col text-[#1F384C]">
            <span className="font-semibold">SRH LOGISTICS</span>
            <span>DOT #3223344</span>
          </div>
        </div>

        {/* <Notification /> */}
        <div className="App">
      <BiSolidBell
          size={25}
          style={{ color: "#B0C3CC" , cursor:"pointer" }}
          onClick={toggleDrawer}
        />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      <Modal style={{background:"transparent" , display:"flex", justifyContent:"center" , alignItems:"center"}} dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>   
          Profile
        </Modal.Header>
        <Modal.Body>
        <div className="text-center text-[#1F384C] flex items-center flex-col pb-4">
                <span className="font-bold ">Mudassar Iqbal</span>
                <span>srhlogistic@zzzzz.com</span>
              </div>
            <div className="flex items-center p-2 justify-between w-[400px] bg-[#ECF5FF] hover:text-[#34B7C1] cursor-pointer">
              <div className="flex gap-2">
              <img src={profile}alt="" />
              <div>
                  <p className="text-[#34B7C1] font-[700]">SRH LOGISTICS</p>
                <p className="text-[#1F384C] font-[700]">DOT #3729312</p>
              </div>
              </div>
              <div>
                <img src="../Vector (17).png" alt="" />
              </div>
            </div>

              <ul>
              
                  <li onClick={()=>{
                    navigate('/Companyprofile')
                    setOpenModal(false)
                  }} className="px-10 py-4 text-[#1F384C] font-[700] cursor-pointer flex gap-2">
                    Company profile
                  </li>
               
                  <li  onClick={()=>{
                    navigate('/Billingdetails')
                    setOpenModal(false)
                  }}  className="px-10 py-4 text-[#1F384C] font-[700] cursor-pointer flex gap-1">
                    Billing Details
                  </li>
            
            <Link to="/">
                <li className="px-10 py-4  font-[700] text-[#EB5757] cursor-pointer flex gap-2">
                  Logout
                </li>
            </Link>
              </ul>

        </Modal.Body>

      </Modal>
    </div>

      </div>
    </div>
  );
};

export default Header;
