/** @format */

const endPoints = {
  auth: {
    login: "api/v1/corporate/signin",
    forgetPassword: "api/v1/auth/forgetPassword",
    verifyOtp: (id) => `api/v1/auth/forgotVerifyotp/${id}`,
    changePassword: (id) => `api/v1/auth/changePassword/${id}`,
  },
  user: {
    getUsers: ({
      query = "",
      dutyStatus = "",
      fromDate = "",
      toDate = "",
      page = 1,
      limit = 10,
    }) =>
      `api/v1/corporate/AllUser?search=${query}&dutyStatus=${dutyStatus}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}`,
    getDeactivatedUser: ({
      query = "",
      dutyStatus = "",
      fromDate = "",
      toDate = "",
      page = 1,
      limit = 10,
    }) =>
      `api/v1/corporate/AllDeleteUser?search=${query}&dutyStatus=${dutyStatus}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}`,
    createUser: "api/v1/corporate/createUser",
    updateDetails: (userId) => `api/v1/corporate/updateUser/${userId}`,

    resetPassword: (userId) => `api/v1/admin/changePassword/${userId}`,
    deactivateUser: (userId) =>
      `api/v1/corporate/updateUserDeactivate/${userId}`,
  },
  truck: {
    paginatedTrucks: ({ page = 1, limit = 10 }) =>
      `api/v1/admin/Truck/allTruck?page=${page}&limit=${limit}`,
  },
  terminal: {
    getAll: ({ page = 1, limit = 15 }) =>
      `api/v1/corporate/AllTerminal?page=${page}&limit=${limit}`,

    createNew: "api/v1/admin/createTerminal",
    update: (id) => `api/v1/admin/updateTerminal/${id}`,
    getDetail: (id) => `api/v1/admin/getTerminal/${id}`,
    assignDriver: (id) => `api/v1/admin/updateDriversInTerminal/${id}`,
    unAssignDriver: ({ id, arrayId }) =>
      `api/v1/admin/Truck/deleteDriversFromTerminal/${id}?arrayId=${arrayId}`,
    remove: (id) => `api/v1/admin/deleteTerminal/${id}`,
  },

  eldDevice: {
    getAll: ({ driver = "", status = "", page = 1, limit = 10 }) =>
      `api/v1/admin/Device/allDevice?driver=${driver}&status=${status}&page=${page}&limit=${limit}`,
  },
  driver: {
    getAll: ({
      query = "",
      dutyStatus = "",
      fromDate = "",
      toDate = "",
      page = 1,
      limit = 10,
    }) =>
      `api/v1/admin/allDriver?search=${query}&dutyStatus=${dutyStatus}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}`,
    createNew: "api/v1/admin/createDriver",
    removeDriver: (id) => `api/v1/admin/deleteUser/${id}`,
    deletedDrivers: "api/v1/admin/allDeleteDriver",
  },
  company: {
    getAll: ({ page = 1, limit = 10 }) =>
      `api/v1/admin/Company/allCompany?page=${page}&limit=${limit}`,
    create: "api/v1/admin/Company/addCompany",
    delete: (id) => `api/v1/admin/Company/deleteCompany/${id}`,
    getById: (id) => `api/v1/admin/Truck/getTruck/${id}`,
  },
  activeDTC: {
    getAll: ({ truck = "", page = 1, limit = 10 }) =>
      `api/v1/admin/Truck/allTruckActiveDtcCode?truck=${truck}&page=${page}&limit=${limit}`,
  },

  //-------
  diagnosisMalfunction: {
    getAll: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allDiagnosticAndMalfunctionEvents?page=${page}&limit=${limit}`,
  },
  devices: {
    getDevices: ({ driver = "", status = "", page = 1, limit = 10 }) =>
      `api/v1/corporate/Device/allDevice?driver=${driver}&status=${status}&page=${page}&limit=${limit}`,
  },
  alert: {
    getAll: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allAlert?page=${page}&limit=${limit}`,
  },
  vehicles: {
    deactiveVehicles: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/Truck/allInActiveTruck?page=${page}&limit=${limit}`,
    updateStatus: `api/v1/corporate/Truck/updateTruckStatus`,
    createVehicle: "api/v1/corporate/Truck/addTruck",
    getActiveVehicle: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/Truck/allTruck?page=${page}&limit=${limit}`,
    updateRegestration: (id) =>
      `api/v1/corporate/Truck/updateTruckRegistration/${id}`,
    updateCargoInsurance: (id) =>
      `api/v1/corporate/Truck/updateTruckCargoInsurance/${id}`,
    getVehicleDetail: (id) => `api/v1/corporate/Truck/getTruck/${id}`,
    editVehicleDetails: (id) =>
      `api/v1/corporate/Truck/updateTruckDetails/${id}`,
    editTruckLiability: (id) =>
      `api/v1/corporate/Truck/updateTruckLiabilityInsurance/${id}`,
    updateVehicleImage: (id) => `api/v1/corporate/Truck/updateTruckImage/${id}`,
    getActiveDtc: ({ truck = "", page = 1, limit = 10 }) =>
      `api/v1/corporate/Truck/allTruckActiveDtcCode?truck=${truck}&page=${page}&limit=${limit}`,
    removeVehicle: (id) => `api/v1/admin/Truck/deleteTruck/${id}`,
  },
  drivers: {
    getAllDrivers: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allDriver?page=${page}&limit=${limit}`,
    updateDriverStatus: "api/v1/corporate/Truck/updateDriverStatus",
    allInactiveDriver: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allInActiveDriver?page=${page}&limit=${limit}`,
    allDeletedDriver: `api/v1/corporate/allDeleteDriver`,
    removeDriver: (id) => `api/v1/corporate/deleteUser/${id}`,
    
  },
};

export default endPoints;
