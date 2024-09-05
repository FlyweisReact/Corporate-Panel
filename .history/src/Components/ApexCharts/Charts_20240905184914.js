/** @format */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const AreaCharts = ({ series = [], labels = [] }) => {
  const [violationSeries] = useState(series);

  const [violationOption] = useState({
    chart: {
      height: 350,
      width: 400,
      type: "area",
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 0,
      max: 1122,
    },
    xaxis: {
      categories: labels,
      title: {
        text: "",
      },
    },
  });
  return (
    <ReactApexChart
      options={violationOption}
      series={violationSeries}
      type="area"
    />
  );
};

export const BarChart = ({}) => {
  const [chartData] = useState({
    series: [
      {
        name: "sales",
        data: [
          {
            x: "100",
            y: 100,
          },
          {
            x: "0-500",
            y: 50,
          },

          {
            x: "500-1000",
            y: 50,
          },

          {
            x: "0-500",
            y: 50,
          },

          {
            x: "0-500",
            y: 50,
          },

          {
            x: "0-500",
            y: 50,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
        toolbar: {
          show: false,
        },
      },
    },
  });
  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="bar"
    />
  );
};
