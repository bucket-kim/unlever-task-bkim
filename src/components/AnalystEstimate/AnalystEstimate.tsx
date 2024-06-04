import ReactApexChart from "react-apexcharts";
import AnalystEstimateStyleContainer from "./AnalystEstimateStyleContainer";

const chartOptions = {
  series001: [
    {
      data: [10, 41, 35, 51, 49, 62],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
    },
  },
};

const AnalystEstimate = () => {
  return (
    <AnalystEstimateStyleContainer>
      <div className="chart-text">
        <h1>Citibank</h1>
        <span>6.5</span>
      </div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series001}
        type="line"
      />
    </AnalystEstimateStyleContainer>
  );
};

export default AnalystEstimate;
