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
      setLoading
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

        </form>
        
      </div>
    </div>
  );
};

export default Login;
