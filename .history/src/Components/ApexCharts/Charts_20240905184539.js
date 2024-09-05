/** @format */

import ReactApexChart from "react-apexcharts";

export const AreaCharts = ({}) => {
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
      options={violationOption}
      series={violationSeries}
      type="area"
    />
  );
};
