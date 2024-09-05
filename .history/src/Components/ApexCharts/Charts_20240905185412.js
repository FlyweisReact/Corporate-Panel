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

export const BarChart = ({ data }) => {
  const [chartData] = useState({
    series: [
      {
        name: "sales",
        data: data,
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

export const PieChart = ({ series = [] }) => {
  const [series] = useState(series);
  const [overspeedingOption] = useState({
    chart: {
      type: "pie",
    },
    labels: ["Overspeeding"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  });
  return (
    <ReactApexChart options={overspeedingOption} series={series} type="pie" />
  );
};
