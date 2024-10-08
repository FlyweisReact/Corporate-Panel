/** @format */

import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { tokenSaver } from "../../utils/utils";
import ClipLoader from "react-spinners/ClipLoader";
import { logo } from "../../Assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const payload = {
    email,
    password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.auth.login, payload, {
      successMsg: "Welcome Back !",
      additionalFunctions: [
        (res) => tokenSaver(res?.accessToken),
        () => navigate("/Logbook"),
      ],
      setLoading,
    });
  };

  return (
    <section className="login-page">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>

        <div className="detail-tab">
          <div className="title">Welcome to NXT ELD!</div>
          <div className="desc">Please log-in your account</div>
        </div>

        <form onSubmit={submitHandler}>
          <div className="form-container">
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
              <button
                className="bg-[#34B7C1] font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full submit-btn"
                type="submit"
              >
                {loading ? (
                  <ClipLoader color="#fff" />
                ) : (
                  <>
                    Login <IoArrowForward />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
