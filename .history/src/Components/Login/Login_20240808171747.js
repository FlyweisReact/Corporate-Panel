/** @format */

import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { tokenSaver } from "../../utils/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    email,
    password,
    userType: "Corporate",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.auth.login, payload, {
      successMsg: "Welcome Back !",
      additionalFunctions: [(res) => tokenSaver(res)],
      setLoading,
    });
  };

  return (
    <div className="background h-screen flex justify-center items-center">
      <div className="w-[500px] rounded-lg bg-[white]">
        <div className="flex justify-center border-b">
          <img
            src="../nxt-eld-high-resolution-logo.png"
            alt=""
            className="w-[250px]"
          />
        </div>
        <div className=" border-b p-10">
          <div className="font-bold text-3xl">Welcome to NXT ELD!</div>
          <div className="text-[#77878F]">Please log-in your account</div>
        </div>

        <form onSubmit={submitHandler}>
          <div className="px-10 py-6">
            <div>
              <label>Email Address / Mobile Number</label>
              <br />
              <input
                className="border w-full h-[50px] mt-2 pl-4"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-2">
              <label>Password</label>
              <br />
              <input
                className="border w-full h-[50px] mt-2 pl-4 placeholder:pl-2"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-[20px] w-[20px]" />
                <div className="text-[#475156]">Remember me</div>
              </div>
              <Link to="/forgetpassword">
                <div className="text-[#252A34] font-semibold">
                  Forget Password?
                </div>
              </Link>
            </div>
            <div className="mt-5">
              <button className="bg-[#34B7C1] font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full"
              type="submit"
              >
              {
                loading ? <C
              }
                Login <IoArrowForward />
              </button>
              <br />
              <Link to="/Logbook">
                <button className="bg-[#34B7C1] font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full">
                  Login <IoArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
