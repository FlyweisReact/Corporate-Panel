/** @format */

import { postApi, showMsg } from "../Api";
import endPoints from "../apiConfig";

export const sendOtp = (e) => {
  e.preventDefault();
  const payload = {
    userType,
    email,
  };

  const showOtp = (res) => {
    setId(res?.data?._id);
    showMsg("", res?.data?.otp, "success");
  };

  postApi(endPoints.auth.forgetPassword, payload, {
    additionalFunctions: [(res) => showOtp(res), () => setStep(step + 1)],
    setLoading,
  });
};
