/** @format */

const endPoints = {
  auth: {
    login: "api/v1/auth/signin",
    forgetPassword: "api/v1/auth/forgetPassword",
    verifyOtp: (id) => `api/v1/auth/forgotVerifyotp/${id}`,
    changePassword: (id) => `api/v1/auth/changePassword/${id}`,
  },
};

export default endPoints;
