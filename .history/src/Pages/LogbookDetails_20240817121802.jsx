/** @format */

import React, { useState } from "react";
import { PopUp } from "../Components/PopUp";
import ReactApexChart from "react-apexcharts";
import TableLayout from "../Components/TableLayout";
import { EditElog } from "../Components/Modal/Modal";

const LogbookDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const [ open ,setOpen ] = useState(false)
  const [openModal2, setOpenModal2] = useState(false);
  const handleOpen = () => setOpenModal(!openModal);
  const [chartState] = useState({
    series: [
      {
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      stroke: {
        curve: "stepline",
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Apr 05, 2024",
        align: "left",
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
    },
  });

  const head = [
    "Status",
    <div className="text-start">Duration</div>,
    "Location",
    "Comment",
    "Actions",
  ];
  const body = [
    [
      <div className="bg-[#EDF8F0] text-[#1DBC60] w-[60px]  px-4 py-1 rounded-2xl m-auto font-[900]">
        ON
      </div>,
      <div className="text-start">
        <p className="font-[900]">On Duty</p>
        00:00:00 | 02hrs 35mins
      </div>,
      "Bigelow, MN, 56117",
      "drive",
      <span onClick={() => setOpenModal(true)}>
        <i className="fa-solid fa-pencil text-[blue] cursor-pointer"></i>
      </span>,
    ],
    [
      <div className="bg-[#EDF8F0] text-[#1DBC60] w-[60px]  px-4 py-1 rounded-2xl m-auto font-[900]">
        OFF
      </div>,
      <div className="text-start">
        <p className="font-[900]">Off Duty</p>
        07:24:35 | 01hr 52mins
      </div>,
      "Bigelow, MN, 56117",
      "No Comment ",
      <span>
        <i className="fa-solid fa-pencil text-[blue] cursor-pointer"></i>
      </span>,
    ],
  ];

  return (
    <>
      <EditElog show={openModal2} handleClose={() => setOpenModal2(false)} />
      <EditElogEvent show={op} handleClose={() => set(false)} />
      <div className="log-book mb-3">
        <div className="header">
          <div className="flex items-center gap-3">
            <p className="font-[700] w-[40px]">HL</p>
            <div>
              <div className="text-[#1F384C] font-[700]">
                Hawkins Leroy (Larven(LR))
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="../Ellipse 30.png"
                  alt=""
                  className="w-[10px] h-[10px]"
                />
                <span className="text-[#1F384C] text-[14px]">Offline</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative w-[180px] rounded-md ">
              <input
                className="placeholder: ml-2 block w-[160px] h-[45px] bg-[#F9F9F9] rounded-xl border-0 py-1.5 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400  sm:text-sm  sm:leading-6
                
                border border-1 border-[#8E8F8F]"
                type="date"
              />
            </div>
            <div
              onClick={() => setOpenModal2(true)}
              className="flex items-center cursor-pointer gap-2 py-2 px-3 bg-[#34B7C1] rounded-md border border-1 border-[#34B7C1]"
            >
              <img src="../Vector4.png" alt="" className="h-fit" />
              <span className="text-white">Edit Elog Form</span>
            </div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#34B7C1] rounded-md border border-1 border-[#34B7C1]">
              <img src="../Vector3.png" alt="" className="h-fit" />
              <span className="text-white">Generate Report</span>
            </div>
          </div>
        </div>

        <div className="drop-content">
          <div className="content">
            <div className="all-fields">
              <div className="text-[#8E8F8F]">
                <p>Start Location</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Start / End Odometer</p>
                <p className="text-[#000] font-[900]">20332 / 20332</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Co Driver Name</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Shipping ID</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Destination</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Miles Today</p>
                <p className="text-[#000] font-[900]"> 477</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Truck Number</p>
                <p className="text-[#000] font-[900]">78616</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Trailer ID</p>
                <p className="text-[#000] font-[900]"> ---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Timezone</p>
                <p className="text-[#000] font-[900]"> America/Chicago</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>24 Start Time</p>
                <p className="text-[#000] font-[900]">Midnight</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Start / End Engine Hours</p>
                <p className="text-[#000] font-[900]">11417.3 / 11425.3</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Driver Name</p>
                <p className="text-[#000] font-[900]">Hawkins Leroy</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Licence State</p>
                <p className="text-[#000] font-[900]">TX</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>ELD ID</p>
                <p className="text-[#000] font-[900]">TRX927</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>File Comment</p>
                <p className="text-[#000] font-[900]">--</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Driver Licence</p>
                <p className="text-[#000] font-[900]">03912897</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>ELD Manufacturer</p>
                <p className="text-[#000] font-[900]">TruckX Inc</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Unidentified Driver Records</p>
                <p className="text-[#000] font-[900]">No</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Print/Display Date</p>
                <p className="text-[#000] font-[900]">2023-12-07</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Exempt Driver Status</p>
                <p className="text-[#000] font-[900]">No</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Data Diagnostic Indicators</p>
                <p className="text-[#000] font-[900]">No</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>ELD Malfunction Indicators</p>
                <p className="text-[#000] font-[900]">No</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Truck Tractor VIN</p>
                <p className="text-[#000] font-[900]">3AKJHHDR2KSHU7041</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Carrier</p>
                <p className="text-[#000] font-[900]">
                  SHAIKH TRANSPORTATION LLC
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>USDOT </p>
                <p className="text-[#000] font-[900]">3504264</p>
              </div>
            </div>

            <div className="signature-btn">
              <p className="text-[#8E8F8F]">Signature</p>
              <div className="flex items-center justify-center border border-dashed border-[#939eb9] gap-2 text-[#F56C89] p-4 bg-[#F3F5FB] mt-2 rounded-xl font-[700]">
                <img src="../Vector2.png" alt="" className="h-fit w-fit" />
                <p>Missing Signature</p>
              </div>
            </div>
          </div>

          <div className="content mt-5">
            <div id="chart">
              <ReactApexChart
                options={chartState.options}
                series={chartState.series}
                type="line"
                height={350}
              />

              <TableLayout
                thead={head}
                className="vehicle-table mt-5 mb-5"
                tbody={body}
              />
            </div>
            <div className="px-6 py-4 w-[18vw] bg-[#E8F4FF] recap-div">
              <p>Recap</p>

              <div className="mt-4 text-[#858B9A]">
                <div className="flex flex-col gap-4 pr-3">
                  <div className="flex justify-between">
                    <p className="desc">12/06</p>
                    <p className="desc">03:07</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="desc">12/05</p>
                    <p className="desc">05:13</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="desc">12/04</p>
                    <p className="desc">11:46</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="desc">12/03</p>
                    <p className="desc">03:28</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="desc">12/02</p>
                    <p className="desc">03:28</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="desc">12/01</p>
                    <p className="desc">03:28</p>
                  </div>
                </div>
                <hr style={{ margin: "16px 0px" }} />
                <div>
                  <p>Cycle Left</p>
                  <p>31:05 / 4 day(s)</p>
                  <hr style={{ margin: "16px 0px" }} />
                </div>
                <div>
                  <p>Available Today</p>
                  <p>01:21</p>
                  <hr style={{ margin: "16px 0px" }} />
                </div>
                <div>
                  <p>Worked Today</p>
                  <p>12:39</p>
                  <hr style={{ margin: "16px 0px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUp
        title="Edit Elog Event - Adam Blake Powers/ Apr 10, 2024"
        setOpenModal={setOpenModal}
        openModal={openModal}
        handleOpen={handleOpen}
      >
        <div>
          <img src="../Frame 494.png" alt="" />
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-[#8E8F8F]">Start Time</p>
              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                style={{
                  boxShadow: "0px 1px 2px 0px #0B3F6F0D",
                  borderRadius: "5px",
                }}
                required
              />
            </div>
            <div>
              <p className="text-[#8E8F8F]">End Time</p>
              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                style={{
                  boxShadow: "0px 1px 2px 0px #0B3F6F0D",
                  borderRadius: "5px",
                }}
                required
              />
            </div>
            <div>
              <p className="text-[#8E8F8F]">Event Type</p>
              <select
                name="cars"
                id="cars"
                style={{
                  boxShadow: "0px 1px 2px 0px #0B3F6F0D",
                  borderRadius: "5px",
                  width: "250px",
                }}
              >
                <option value="On Duty">On Duty</option>
                <option value="Off Duty">Off Duty</option>
                <option value="Driving">Driving</option>
                <option value="Sleeper Berth">Sleeper Berth</option>
                <option value="Yard">Yard</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
          </div>
          <div>
            <div class="relative mt-4">
              <input
                type="text"
                id="floating_filled"
                className="block w-[400px] rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                className="absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Geo loaction
              </label>
            </div>
            <div class="relative mt-4">
              <input
                type="text"
                id="floating_filled1"
                className="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                for="floating_filled1"
                className="absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Comment
              </label>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              className="text-[#F56C89] w-full py-2 rounded-sm"
              style={{ border: "1px solid #F56C89" }}
            >
              Cancel
            </button>
            <button
              className="text-white w-full py-2 bg-[#34B7C1] rounded-sm"
              style={{ border: "1px solid #34B7C1" }}
            >
              Update
            </button>
          </div>
        </div>
      </PopUp>
    </>
  );
};

export default LogbookDetails;
