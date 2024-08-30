/** @format */

import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { postApi } from "../../Repository/Api";
import { InputComponent } from "../HelpingComponents";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";
import { logo } from "../../Assets";

const Verifyemailandphone = () => {
  const userType = "Corporate";
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [otp, setOtp] = useState("");
  const [ newPassword ,setNewPassword ] = useState("")
  const [ confirmPassword ,setConfirmPassword ] = useState("")

  const sendOtp = (e) => {
    e.preventDefault();
    const payload = {
      userType,
      email,
    };

    const showOtp = (res) => {
      setId(res?.data?._id);
      console.log(res?.data?.otp);
    };

    postApi(endPoints.auth.forgetPassword, payload, {
      additionalFunctions: [(res) => showOtp(res) , () => setStep(step + 1)],
      setLoading,
    });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const payload = { otp };
    postApi(endPoints.auth.verifyOtp(id), payload, {
      additionalFunctions: [() => setStep(step + 1)],
      setLoading,
    });
  };

  const resetPassword = (e) => {

  }

  return (
    <div className=" login-page">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>

        {step === 1 && (
          <div>
            <div className="detail-tab">
              <div className="title">Enter Mobile or Email</div>
              <div className="desc">
                {" "}
                You’ll receive a verification code shortly.
              </div>
            </div>

            <form onSubmit={sendOtp}>
              <div className="form-container">
                <div>
                  <label className="font-bold">Mobile</label>
                  <br />
                  <input className="border w-full h-[57px] mt-2 font-bold" />
                </div>

                <div className="flex items-center gap-2 mt-2 justify-between">
                  <hr className="border w-full" />
                  or
                  <hr className="border w-full" />
                </div>
                <div className="mt-2">
                  <label className="font-bold">Email</label>
                  <br />
                  <InputComponent
                    className="border font-bold w-full h-[57px] mt-2 placeholder:pl-2"
                    type="email"
                    onChangeEvent={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>

                <div className="mt-5">
                  <button
                    className="bg-[#34B7C1] uppercase font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full"
                    type="submit"
                  >
                    {loading ? (
                      <ClipLoader color="#fff" />
                    ) : (
                      <>
                        NEXT <IoArrowForward />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className=" border-b p-10">
              <div className="font-bold text-3xl">Enter Verification code.</div>
              <div className="text-[#77878F]">
                Verification code sent to your mobile number or email.
              </div>
            </div>
            <form onSubmit={verifyOtp}>
              <div className="p-10">
                <div>
                  <label>Verification Code</label>
                  <br />
                  <InputComponent
                    className="border font-bold w-full h-[57px] mt-2 placeholder:pl-2"
                    type="text"
                    onChangeEvent={(e) => setOtp(e.target.value)}
                    value={otp}
                    required
                  />
                </div>

                <div className="mt-5">
                  <button
                    className="bg-[#34B7C1] uppercase font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full"
                    type="submit"
                  >
                    {loading ? (
                      <ClipLoader color="#fff" />
                    ) : (
                      <>
                        NEXT <IoArrowForward />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className=" border-b p-10">
              <div className="font-bold text-3xl">Set New Password</div>
              <div className="text-[#77878F]">
                Use combination of uppercase letter(XYZ), lowercase letter(xyz),
                numbers(1234) and symbols(!@&).
              </div>
            </div>
            <div className="p-10">
              <div>
                <label>New Password</label>
                <br />
                <input className="border w-full h-[57px] mt-2" />
              </div>

              <div className="mt-2">
                <label>Confirm Password</label>
                <br />
                <div className="relative">
                  <input
                    className="border w-full h-[50px] mt-2 pl-4 pr-12 placeholder:pl-2 "
                    placeholder="Password"
                  />
                  <img
                    src="../Eye.png"
                    alt=""
                    className="absolute top-5 right-4"
                  />
                </div>
              </div>

              <div className="mt-5">
                <Link to="/Verifyemailandphone">
                  <button className="bg-[#34B7C1] uppercase font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full">
                    Set PAssword <IoArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verifyemailandphone;
