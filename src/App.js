/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Logbook from "./Pages/Logbook";
import Reports from "./Pages/Reports";
import Dashcams from "./Pages/Dashcams";
import Reportdetails from "./Pages/Reportdetails";
import Iftatrips from "./Pages/Iftatrips";
import Iftareports from "./Pages/Iftareports";
import Vehicles from "./Pages/Vehicles";
import Vehicledetail from "./Pages/Vehicledetail";
import Drivers from "./Pages/Drivers";
import Deleteddrivers from "./Pages/Deleteddrivers";
import Devices from "./Pages/Devices";
import Trackingdevices from "./Pages/Trackingdevices";
import Userroles from "./Pages/Userroles";
import Terminals from "./Pages/Terminals";
import Sensordevices from "./Pages/Sensordevices";
import Dashcamdevices from "./Pages/Dashcamdevices";
import Companyprofile from "./Pages/Companyprofile";
import Billingdetails from "./Pages/Billingdetails";
import Apisharing from "./Pages/Apisharing";
import Alerts from "./Pages/Alerts";
import Login from "./Components/Login/Login";
import Diagnosticevents from "./Pages/Diagnosticevents";
import Trackinglinks from "./Pages/Trackinglinks";
import Forgetpassword from "./Components/Login/Forgetpassword";
import Verifyemailandphone from "./Components/Login/Verifyemailandphone";
import Verificationcode from "./Components/Login/Verificationcode";
import LogbookDetails from "./Pages/Logbook/LogbookDetails";
import Location from "./Pages/Location";
import Park from "./Pages/Park";
import ParkedCar from "./Pages/ParkedCar";
import Geofences from "./Pages/Geofences";
import IftatripsDetails from "./Pages/IftatripsDetails";
import IftareportsDetails from "./Pages/IftareportsDetails";
import TerminalsDatils from "./Pages/TerminalsDatils";
import Trailers from "./Pages/Trailers";
import { ReactNotifications } from "react-notifications-component";
import Dormancy from "./Pages/Reports/Dormancy";
import DriverSafety from "./Pages/Reports/DriverSafety";
import DutyStatus from "./Pages/Reports/DutyStatus";
import LogHistory from "./Pages/Reports/LogHistory";
import ExternalBattery from "./Pages/Reports/ExternalBattery";
import FuelEfficiency from "./Pages/Reports/FuelEfficiency";
import Geofence from "./Pages/Reports/Geofence";
import HOS from "./Pages/Reports/HOS";
import Healthmaps from "./Pages/Reports/Healthmaps";
import IdleTime from "./Pages/Reports/IdleTime";
import PostTrip from "./Pages/Reports/PostTrip";
import PreTrip from "./Pages/Reports/PreTrip";
import TemperatureReport from "./Pages/Reports/TemperatureReport";
import TrackerBattery from "./Pages/Reports/TrackerBattery";
import TripHistory from "./Pages/Reports/TripHistory";
import DriveTime from "./Pages/Reports/DriveTime";
import Utilization from "./Pages/Reports/Utilization";
import ReportHistory from "./Pages/Reports/ReportHistory";
import Dummy from "./Pages/Dummy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/Verifyemailandphone",
    element: <Verifyemailandphone />,
  },
  {
    path: "/Verificationcode",
    element: <Verificationcode />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/Logbook", element: <Logbook /> },
      { path: "/Logbook/:id", element: <LogbookDetails /> },
      { path: "/location", element: <Location /> },
      { path: "/park", element: <Park /> },
      { path: "/parked", element: <ParkedCar /> },
      { path: "/Trackinglinks", element: <Trackinglinks /> },
      { path: "/Geofences", element: <Geofences /> },
      { path: "/Reports", element: <Reports /> },
      { path: "/Reportdetails", element: <Reportdetails /> },
      { path: "/Dashcams", element: <Dashcams /> },
      { path: "/Iftatrips", element: <Iftatrips /> },
      { path: "/Iftatrips/:id", element: <IftatripsDetails /> },
      { path: "/Iftareports", element: <Iftareports /> },
      { path: "/Iftareports/:id", element: <IftareportsDetails /> },
      { path: "/Vehicles", element: <Vehicles /> },
      { path: "/Vehicledetail/:id", element: <Vehicledetail /> },
      { path: "/Vehicles/trailers", element: <Trailers /> },
      { path: "/Drivers", element: <Drivers /> },
      { path: "/DeleteDrivers", element: <Deleteddrivers /> },
      { path: "/Devices", element: <Devices /> },
      { path: "/Userroles", element: <Userroles /> },
      { path: "/Devices/TrackingDevices", element: <Trackingdevices /> },
      { path: "/Devices/SensorDevices", element: <Sensordevices /> },
      { path: "/Devices/DashcamDevices", element: <Dashcamdevices /> },
      { path: "/Terminals", element: <Terminals /> },
      { path: "/Terminals/:id", element: <TerminalsDatils /> },
      { path: "/Alerts", element: <Alerts /> },
      { path: "/Companyprofile", element: <Companyprofile /> },
      { path: "/Billingdetails", element: <Billingdetails /> },
      { path: "/Apisharing", element: <Apisharing /> },
      { path: "/Diagnosticevents", element: <Diagnosticevents /> },
      { path: "/reports/dormancy-report", element: <Dormancy /> },
      { path: "/reports/driver-safety", element: <DriverSafety /> },
      { path: "/reports/duty-status-report", element: <DutyStatus /> },
      { path: "/reports/log-history", element: <LogHistory /> },
      {
        path: "/reports/external-battery-health",
        element: <ExternalBattery />,
      },
      {
        path: "/reports/fuel-efficiency",
        element: <FuelEfficiency />,
      },
      {
        path: "/reports/geofence-report",
        element: <Geofence />,
      },
      {
        path: "/reports/hos-report",
        element: <HOS />,
      },
      {
        path: "/reports/healthmap-report",
        element: <Healthmaps />,
      },
      {
        path: "/reports/idle-time-report",
        element: <IdleTime />,
      },
      {
        path: "/reports/post-trip-dvir-report",
        element: <PostTrip />,
      },
      {
        path: "/reports/pre-trip-dvir-report",
        element: <PreTrip />,
      },
      {
        path: "/reports/temperature-humidity-report",
        element: <TemperatureReport />,
      },
      {
        path: "/reports/tracker-battery-charge-report",
        element: <TrackerBattery />,
      },
      {
        path: "/reports/trip-history",
        element: <TripHistory />,
      },
      {
        path: "/reports/unassigned-drive-time",
        element: <DriveTime />,
      },
      {
        path: "/reports/utilization-report",
        element: <Utilization />,
      },
      {
        path: "/reports/report-history",
        element: <ReportHistory />,
      },
      {
        path: "/dummy",
        element: <Dummy />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
