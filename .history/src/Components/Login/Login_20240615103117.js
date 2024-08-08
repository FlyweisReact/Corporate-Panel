import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="background h-screen flex justify-center items-center">
      <div className="w-[500px] rounded-lg bg-[white]">
        <div className="flex justify-center border-b">
         <img src="../nxt-eld-high-resolution-logo.png" alt="" className="w-[250px]" />
        </div>
        <div className=" border-b p-10">
          <div className="font-bold text-3xl">Welcome to NXT ELD!</div>
          <div className="text-[#77878F]">Please log-in your account</div>
        </div>
        <div className="px-10 py-6">
          <div>
            <label>Email Address / Mobile Number</label>
            <br />
            <input className="border w-full h-[50px] mt-2 pl-4" />
          </div>

          <div className="mt-2">
            <label>Password</label>
            <br />
            <input
              className="border w-full h-[50px] mt-2 pl-4 placeholder:pl-2"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-[20px] w-[20px]" />
              <div className="text-[#475156]">Remember me</div>
            </div>
            <Link to="/forgetpassword">
              <div className="text-[#252A34] font-semibold">Forget Password?</div>
            </Link>
          </div>
          <div className="mt-5">
            <Link to="/Logbook">
              <button className="bg-[#34B7C1] font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full">
                Login <IoArrowForward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
