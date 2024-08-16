import React from "react";
import livebtn from "../Assets/Dashboard/livebtn.svg";
import dot from "../Assets/Dashboard/dot.svg";
import halfcircle from "../Assets/Dashboard/halfcircle.svg";
import { GoDotFill } from "react-icons/go";
const Dashboard = () => {
  return (
    <div className="bg-[#F9FBFF] p-5  h-[400px]">
      <div className="flex justify-between">
        <div className="semi-bold text-[28px]">
          Welcome back, Company XYZName!
        </div>
        <div className="w-[120px] flex justify-center items-center gap-2 h-[40px] border-[#EB5757] font-semibold border text-[#EB5757] rounded-3xl bg-[#FDEEEE]">
          <img src={livebtn} alt="" className="w-[24px] h-[24px]" />
          LIVE
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-5">
        <div className="w-[380px] h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
          <div className="flex font-semibold text-[20px] items-center gap-2">
            <img src={dot} alt="" className="w-[11px] h-[17px]" /># Drivers
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src={halfcircle} alt="" />
              <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                87%
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />1
              </div>
              <div className="font-semibold">Off </div>
              <div className="font-semibold">Duty</div>
            </div>
          </div>
        </div>
        <div className="w-[380px] h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
          <div className="flex font-semibold text-[20px] items-center gap-2">
            <img src={dot} alt="" className="w-[11px] h-[17px]" /># Trucks &
            Vehicles
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src={halfcircle} alt="" />
              <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                87%
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />2
              </div>
              <div className="font-semibold">Parked </div>
            </div>
          </div>
        </div>
        <div className="w-[380px] h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
          <div className="flex font-semibold text-[20px] items-center gap-2">
            <img src={dot} alt="" className="w-[11px] h-[17px]" /># Drivers
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src={halfcircle} alt="" />
              <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                87%
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center font-semibold">
                <GoDotFill style={{ color: "#34B7C1" }} size={20} />3
              </div>
              <div className="font-semibold">Off </div>
              <div className="font-semibold">Duty</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white  h-[600px]  rounded-xl">
        <div className="flex gap-10 p-5 border-b ">
          <div className="font-semibold">Today</div>
          <div className="font-semibold">7 Days</div>
          <div className="font-semibold">30 Days</div>
        </div>
        <div className="mt-5 flex justify-center gap-5">
          <div className="w-[380px] box-shadow rounded-xl h-[122px] border p-5">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /> 5
            </div>
            <div className="text-[20px] text-left pl-5 font-semibold ">
              # Signatures Missing
            </div>
          </div>
          <div className="w-[380px] box-shadow rounded-xl h-[122px] border p-5">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /> 5
            </div>
            <div className="text-[20px] text-left pl-5 font-semibold ">
              # Signatures Missing
            </div>
          </div>
          <div className="w-[380px] box-shadow rounded-xl h-[122px] border p-5">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /> 5
            </div>
            <div className="text-[20px] text-left pl-5 font-semibold ">
              # Signatures Missing
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-center mt-5">
          <div className="w-[380px] border h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /># Assets
              Fleet Stats - Trucks
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <img src={halfcircle} alt="" />
                <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                  87%
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center font-semibold">
                  <GoDotFill style={{ color: "#34B7C1" }} size={20} />1
                </div>
                <div className="font-semibold">Off </div>
                <div className="font-semibold">Duty</div>
              </div>
            </div>
          </div>
          <div className="w-[380px] border h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /># Assets
              Fleet Stats - Trucks
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <img src={halfcircle} alt="" />
                <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                  87%
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center font-semibold">
                  <GoDotFill style={{ color: "#34B7C1" }} size={20} />2
                </div>
                <div className="font-semibold">Parked </div>
              </div>
            </div>
          </div>
          <div className="w-[380px]  border h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /># Assets
              Fleet Stats - Trucks
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <img src={halfcircle} alt="" />
                <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                  87%
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center font-semibold">
                  <GoDotFill style={{ color: "#34B7C1" }} size={20} />3
                </div>
                <div className="font-semibold">Off </div>
                <div className="font-semibold">Duty</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-5">
          <div className="w-[780px] border h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /># Assets
              Fleet Stats - Trucks
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="relative">
                <img src={halfcircle} alt="" />
                <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                  87%
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center font-semibold">
                  <GoDotFill style={{ color: "#34B7C1" }} size={20} />1
                </div>
                <div className="font-semibold">Off </div>
                <div className="font-semibold">Duty</div>
              </div>
            </div>
          </div>

          <div className="w-[380px] border h-[300px] box-shadow  flex flex-col gap-10 rounded-xl bg-white pt-5 pl-10 ">
            <div className="flex font-semibold text-[20px] items-center gap-2">
              <img src={dot} alt="" className="w-[11px] h-[17px]" /># Assets
              Fleet Stats - Trucks
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <img src={halfcircle} alt="" />
                <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold text-[#2093c3]">
                  87%
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center font-semibold">
                  <GoDotFill style={{ color: "#34B7C1" }} size={20} />3
                </div>
                <div className="font-semibold">Off </div>
                <div className="font-semibold">Duty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
