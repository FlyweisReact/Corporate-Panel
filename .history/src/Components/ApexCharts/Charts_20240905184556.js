/** @format */

import ReactApexChart from "react-apexcharts";

export const AreaCharts = ({ data }) => {
  const [chartData] = useState({
    series: [
      {
        name: "sales",
        data: data
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
