/** @format */

const endPoints = {
  auth: {
    login: "api/v1/corporate/signin",
    forgetPassword: "api/v1/corporate/forgetPassword",
    verifyOtp: (id) => `api/v1/corporate/forgotVerifyotp/${id}`,
    changePassword: (id) => `api/v1/corporate/changePassword/${id}`,
    getProfile: "api/v1/corporate/getProfile",
  },
  diagnosisMalfunction: {
    getAll: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allDiagnosticAndMalfunctionEvents?page=${page}&limit=${limit}`,
  },
  devices: {
    getDevices: ({ driver = "", status = "", page = 1, limit = 10 }) =>
      `api/v1/corporate/Device/allDevice?driver=${driver}&status=${status}&page=${page}&limit=${limit}`,
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
    allDeletedDriver: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allDeleteDriver?page=${page}&limit=${limit}`,
    removeDriver: (id) => `api/v1/corporate/deleteUser/${id}`,
    createDriver: "api/v1/corporate/createDriver",
    unassignTruck: (id) =>
      `api/v1/corporate/removeTruckFromDriverProfile/${id}`,
    updateDriver: (id) => `api/v1/corporate/updateDriver/${id}`,
    updateDriverSetting: (id) => `api/v1/corporate/updateDriverSetting/${id}`,
    getDriverDetail: (id) => `api/v1/corporate/getUser/${id}`,
    getDriversList: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/getAllDriver?page=${page}&limit=${limit}`,
  },
  users: {
    getUser: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/AllUser?page=${page}&limit=${limit}`,
    getDeactivatedUser: ({
      query = "",
      dutyStatus = "",
      fromDate = "",
      toDate = "",
      page = 1,
      limit = 10,
    }) =>
      `api/v1/corporate/AllDeleteUser?search=${query}&dutyStatus=${dutyStatus}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}`,
    updateUserStatus: (userId) =>
      `api/v1/corporate/updateUserDeactivate/${userId}`,
    updateUserDetails: (userId) => `api/v1/corporate/updateUser/${userId}`,
    updateUserPassword: (userId) => `api/v1/corporate/changePassword/${userId}`,
    createNewUser: "api/v1/corporate/createUser",
  },
  alert: {
    getAll: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/allAlert?page=${page}&limit=${limit}`,
  },
  terminals: {
    activeTerminal: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/AllTerminal?page=${page}&limit=${limit}`,
    updateStatus: `api/v1/corporate/updateTerminalStatus`,
    inactiveTerminals: ({ page = 1, limit = 10 }) =>
      `api/v1/corporate/AllInActiveTerminal?page=${page}&limit=${limit}`,
    createTerminal: "api/v1/corporate/createTerminal",
    updateTerminal: (id) => `api/v1/corporate/updateTerminal/${id}`,
    removeTerminal: (id) => `api/v1/corporate/deleteTerminal/${id}`,
    getTerminalDetail: (id) => `api/v1/corporate/getTerminal/${id}`,
    assignDriver: (id) => `api/v1/corporate/updateDriversInTerminal/${id}`,
    unAssignDriver: ({ id, arrayId }) =>
      `api/v1/corporate/Truck/deleteDriversFromTerminal/${id}?arrayId=${arrayId}`,
  },
  apiKey: {
    activeKey: "api/v1/corporate/allSharingApiKey",
  },
  logbook : {
    g
  }
};

export default endPoints;
