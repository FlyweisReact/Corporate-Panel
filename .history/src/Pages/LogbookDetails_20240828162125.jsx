/** @format */

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import TableLayout from "../Components/TableLayout";
import { EditElog, EditElogEvent } from "../Components/Modal/Modal";
import { useParams } from "react-router-dom";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

const LogbookDetails = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
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
  const [ data , setData ] = useState({});

  console.log("id" , id)

  // fetch driver details
  const fetchHandler = () => {
    getApi(endPoints.drivers.getDriverDetail(id) , {
      setResponse : setData
    })
  }


  

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
      <span onClick={() => setOpen(true)}>
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
      <span onClick={() => setOpen(true)}>
        <i className="fa-solid fa-pencil text-[blue] cursor-pointer"></i>
      </span>,
    ],
  ];

  return (
    <>
      <EditElog show={openModal2} handleClose={() => setOpenModal2(false)} />
      <EditElogEvent show={open} handleClose={() => setOpen(false)} />
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
    </>
  );
};

export default LogbookDetails;
