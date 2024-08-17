/** @format */

import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Companyprofile = () => {
  return (
    <div className="p-5">
      <div className="text-[28px]  font-semibold ">Company Profile</div>

      <div className="companyDetails">
        <div className="company-info-card">
          <div className="user-img">
            <FaRegUserCircle size={100} style={{ color: "#34B7C1" }} />
            <div className="bg-[#34B7C1] absolute -bottom-0 left-[4rem] w-[40px] h-[40px] rounded-full flex justify-center items-center">
              <CiEdit style={{ color: "white" }} size={25} />
            </div>
          </div>
          <div className="info">
            <h3 className="title">SHAIKH TRANSPORTATION LLC</h3>
            <div className="info-div">
              <p className="desc">Admin Email:</p>
              <p className="bold">shaikhtransportation@gmail.com</p>
            </div>
            <div className="info-div">
              <p className="desc">DOT:</p>
              <p className="bold">3504264</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="flex flex-col gap-5">
            <div className="h-[100px] w-full  flex justify-between items-center pl-10 pr-10  rounded-xl"
            style={{border : '1px solid rgb(201, 209, 232)'}}
            >
              <div className="text-slate-500">
                Change the Unit System for your Dashboard
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <input type="radio" />
                  Miles(mi)
                </div>
                <div className="flex gap-1">
                  <input type="radio" />
                  Kilometers(km)
                </div>
              </div>
            </div>
            <div className="h-[100px] w-full  flex justify-between items-center pl-10 pr-10  box-shadow rounded-xl">
              <div className="flex flex-col">
                <span className="text-slate-500">Home Terminal Timezone</span>
                <span className="text-[#666666] font-semibold">
                  Eastern Time (US & Canada)
                </span>
              </div>
              <div>
                <MdOutlineEdit style={{ color: "#34B7C1" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div className="mt-5 flex gap-5">
        <div className="w-[400px]  pl-5 pr-10 p-5 rounded-lg box-shadow">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FaLocationDot style={{ color: "#34B7C1" }} />{" "}
              <div className="text-slate-500">Shipping Address</div>
            </div>
            <MdOutlineEdit style={{ color: "#34B7C1" }} />
          </div>
          <div className="text-[#666666] font-semibold">
            5421 Claridge Dr, Chesterfield Virginia 23212,United States.
          </div>
        </div>
        <div className="w-[400px]  pl-5 pr-10 p-5 rounded-lg box-shadow">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FaLocationDot style={{ color: "#34B7C1" }} />{" "}
              <div className="text-slate-500">Terminal Address</div>
            </div>
            <MdOutlineEdit style={{ color: "#34B7C1" }} />
          </div>
          <div className="text-[#666666] font-semibold">
            5421 Claridge Dr, Chesterfield Virginia 23212,United States.
          </div>
        </div>
        <div className="w-[400px]  pl-5 pr-10 p-5 rounded-lg box-shadow">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FaLocationDot style={{ color: "#34B7C1" }} />{" "}
              <div className="text-slate-500">Office Address</div>
            </div>
            <MdOutlineEdit style={{ color: "#34B7C1" }} />
          </div>
          <div className="text-[#666666] font-semibold">
            5421 Claridge Dr, Chesterfield Virginia 23212,United States.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyprofile;
