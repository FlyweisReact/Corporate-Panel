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

export const PieChart = ({ series = [], labels = [] }) => {
  const [data] = useState(series);
  const [overspeedingOption] = useState({
    chart: {
      type: "pie",
    },
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  });
  return (
    <ReactApexChart options={overspeedingOption} series={data} type="pie" />
  );
};

export const BarHorizontal = ({data = []  , labels = []}) => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];
  return <ReactApexChart options={options} series={series} type="bar" />;
};
