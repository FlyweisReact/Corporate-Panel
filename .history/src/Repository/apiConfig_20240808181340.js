/** @format */

const endPoints = {
  auth: {
    login: "api/v1/auth/signin",
  },
  drivers : {
    getAll  : () => `api/v1/admin/allDriver?search=&dutyStatus=&fromDate=&toDate=&page=&limit=`
  }
};

export default endPoints;
