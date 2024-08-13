/** @format */

const endPoints = {
  auth: {
    login: "api/v1/auth/signin",
  },
  drivers: {
    getAll: ({
      search = "",
      status = "",
      from = "",
      end = "",
      page = 1,
      limit = 10,
    }) =>
      `api/v1/admin/allDriver?search=${search}&dutyStatus=${status}&fromDate=${from}&toDate=${end}&page=${page}&limit=${limit}`,
      createNew: "api/v1/admin/createDriver",
  },
};

export default endPoints;
