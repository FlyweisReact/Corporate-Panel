/** @format */

import React, { useCallback, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import TableLayout from "../Components/TableLayout";
import { EditElog, EditElogEvent } from "../Components/Modal/Modal";
import { useParams } from "react-router-dom";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { returnFullName, convertMinutesToTimeFormat } from "../utils/utils";

const returnNickName = (data) => {
  if (data?.firstName || data?.lastName) {
    return data?.firstName?.slice(0, 1) + data?.lastName?.slice(0, 1);
  } else {
    return "";
  }
};

const statusMapping = {
  On: 1,
  D: 2,
  Off: 3,
  SB: 4,
};

const LogbookDetails = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Status",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      stroke: {
        curve: "stepline",
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Oct 14, 2024",
        align: "left",
      },

      xaxis: {
        title: {
          text: "",
        },
        labels: {
          formatter: (val) => `${val}`, // Customize the time labels if needed
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        categories: ["S", "ON", "OFF", "SB"], // Fixed status values on the y-axis
        labels: {
          formatter: function (val) {
            return val; // Show the status labels as they are
          },
        },
      },

      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
    },
  });

  const [data, setData] = useState({});
  const [detail, setDetails] = useState(null);
  const [loogBookData, setLoogBookData] = useState(null);
  const [graph, setGraph] = useState(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    if (id && formattedDate) {
      getApi(endPoints.logbook.getDriverLoogbook({ id, date: "14-10-2024" }), {
        setResponse: setGraph,
      });
    }
  }, [formattedDate, id]);

  // fetch driver details
  const fetchHandler = useCallback(() => {
    getApi(endPoints.drivers.getDriverDetail(id), {
      setResponse: setData,
    });
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  useEffect(() => {
    if (graph) {
      const timeArray = graph?.data?.docs?.map((item) => {
        const date = new Date(item.fromTime);
        return isNaN(date.getTime()) ? null : date;
      });

      const statusArr = graph?.data?.docs?.map(
        (item) => statusMapping[item.dutyStatus]
      );

      // Prepare data for the chart
      const chartData = statusArr.map((status, index) => ({
        x: timeArray[index], // Use fromTime for x-axis
        y: status,
      }));

      // Check if the last object has toTime and is valid
      const lastItem = graph?.data?.docs[graph.data.docs.length - 1];
      const lastToTime = lastItem ? new Date(lastItem.toTime) : null;

      if (lastToTime && !isNaN(lastToTime.getTime())) {
        const lastStatus = statusMapping[lastItem.dutyStatus]; // Get the last status
        // Add last toTime and status to the chart data
        chartData.push({
          x: lastToTime,
          y: lastStatus,
        });
      }

      setChartState((prevState) => ({
        ...prevState,
        series: [
          {
            data: chartData, // Use prepared chart data
          },
        ],
        options: {
          ...prevState.options,
          yaxis: {
            min: 1,
            max: 4,
            title: {
              text: "",
            },
            labels: {
              formatter: function (value) {
                const statusLabels = { 2: "D", 1: "On", 3: "Off", 4: "SB" };
                return statusLabels[value];
              },
            },
          },
          xaxis: {
            title: {
              text: "",
            },
            labels: {
              formatter: function (value) {
                const date = new Date(value);
                return date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                });
              },
            },
          },
        },
      }));
    }
  }, [graph]);

  const head = [
    "Status",
    <div className="text-start">Duration</div>,
    "Location",
    "Comment",
    "Actions",
  ];
  const body = graph?.data?.docs?.map((i) => [
    <div
      className={`bg-[#EDF8F0] text-[#1DBC60] w-[60px]  px-4 py-1 rounded-2xl m-auto font-[900]`}
    >
      {i?.status}
    </div>,
    <div className="text-start">
      <p className="font-[900]"> {i?.dutyStatus} </p>
      {convertMinutesToTimeFormat(i?.totalMin)} | {i?.totalMin || 0}mins
    </div>,
    i?.location,
    i?.comment,
    <span onClick={() => setOpen(true)}>
      <i className="fa-solid fa-pencil text-[blue] cursor-pointer"></i>
    </span>,
  ]);

  useEffect(() => {
    if (id) {
      getApi(endPoints.logbook.getLogbookByDriver(id), {
        setResponse: setDetails,
      });
    }
  }, [id]);

  useEffect(() => {
    if (detail) {
      setLoogBookData(detail?.data?.docs?.reverse()?.[0]);
    }
  }, [detail]);

  return (
    <>
      <EditElog show={openModal2} handleClose={() => setOpenModal2(false)} />
      <EditElogEvent show={open} handleClose={() => setOpen(false)} />
      <div className="log-book mb-3">
        <div className="header">
          <div className="flex items-center gap-3">
            <p className="font-[700] w-[40px]">{returnNickName(data?.data)}</p>
            <div>
              <div className="text-[#1F384C] font-[700]">
                {returnFullName(data?.data)}
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="../Ellipse 30.png"
                  alt=""
                  className="w-[10px] h-[10px]"
                />
                <span className="text-[#1F384C] text-[14px]">
                  {data?.data?.dutyStatus}
                </span>
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
                <p className="text-[#000] font-[900]">
                  {" "}
                  {loogBookData?.startLocation}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Start / End Odometer</p>
                <p className="text-[#000] font-[900]">
                  {loogBookData?.startOdometer} / {loogBookData?.endOdometer}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Co Driver Name</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Shipping ID</p>
                <p className="text-[#000] font-[900]">
                  {" "}
                  {loogBookData?.shippingId}{" "}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Destination</p>
                <p className="text-[#000] font-[900]">
                  {loogBookData?.destinationLocation}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Miles Today</p>
                <p className="text-[#000] font-[900]">
                  {" "}
                  {loogBookData?.milesToday}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Truck Number</p>
                <p className="text-[#000] font-[900]">{loogBookData?.truck}</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Trailer ID</p>
                <p className="text-[#000] font-[900]">
                  {loogBookData?.trailerId}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Timezone</p>
                <p className="text-[#000] font-[900]">{data?.data?.timeZone}</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>24 Start Time</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Start / End Engine Hours</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Driver Name</p>
                <p className="text-[#000] font-[900]">
                  {returnFullName(data?.data)}
                </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Licence State</p>
                <p className="text-[#000] font-[900]">{data?.data?.state}</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>ELD ID</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>File Comment</p>
                <p className="text-[#000] font-[900]">--</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Driver Licence</p>
                <p className="text-[#000] font-[900]">{data?.data?.license}</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>ELD Manufacturer</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Unidentified Driver Records</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Print/Display Date</p>
                <p className="text-[#000] font-[900]"> {loogBookData?.date} </p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Exempt Driver Status</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Data Diagnostic Indicators</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>ELD Malfunction Indicators</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Truck Tractor VIN</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>Carrier</p>
                <p className="text-[#000] font-[900]">---</p>
              </div>
              <div className="text-[#8E8F8F]">
                <p>USDOT </p>
                <p className="text-[#000] font-[900]">
                  {" "}
                  {loogBookData?.dotNumber}
                </p>
              </div>
            </div>

            <div className="signature-btn">
              <p className="text-[#8E8F8F]">Signature</p>
              {loogBookData?.signature ? (
                loogBookData?.signature
              ) : (
                <div className="flex items-center justify-center border border-dashed border-[#939eb9] gap-2 text-[#F56C89] p-4 bg-[#F3F5FB] mt-2 rounded-xl font-[700]">
                  <img src="../Vector2.png" alt="" className="h-fit w-fit" />
                  <p>Missing Signature</p>
                </div>
              )}
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
                  <p> {loogBookData?.cycleLeft} </p>
                  <hr style={{ margin: "16px 0px" }} />
                </div>
                <div>
                  <p>Available Today</p>
                  <p>{loogBookData?.availableToday}</p>
                  <hr style={{ margin: "16px 0px" }} />
                </div>
                <div>
                  <p>Worked Today</p>
                  <p>{loogBookData?.workedToday}</p>
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
