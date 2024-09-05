import ReactApexChart from "react-apexcharts";


export const AreaCharts = ({}) => {
    return <ReactApexChart
    options={violationOption}
    series={violationSeries}
    type="area"
  />
}