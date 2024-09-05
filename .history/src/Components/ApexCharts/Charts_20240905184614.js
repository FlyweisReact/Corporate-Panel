/** @format */

import ReactApexChart from "react-apexcharts";

export const AreaCharts = ({ data }) => {

    const [violationSeries] = useState([
        {
          name: "series1",
          data: [1122, 750, 350, 750, 780, 1000, 200],
        },
      ]);
    
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
          categories: [
            "Aug 29",
            "Aug 30",
            "Aug 31",
            "Sep 1",
            "Sep 2",
            "Seo 3",
            "Sep 4",
            "Sep 5",
            "Sep 6",
          ],
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
