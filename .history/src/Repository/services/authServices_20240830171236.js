/** @format */

import { postApi, showMsg } from "../Api";
import endPoints from "../apiConfig";

export const sendOtp = (payload , setLoading , setStep , step) => {
  e.preventDefault();

  const showOtp = (res) => {
    setId(res?.data?._id);
    showMsg("", res?.data?.otp, "success");
  };

  postApi(endPoints.auth.forgetPassword, payload, {
    additionalFunctions: [(res) => showOtp(res), () => setStep(step + 1)],
    setLoading,
  });
};
