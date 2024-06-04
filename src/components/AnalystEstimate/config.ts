import { ApexOptions } from "apexcharts";

const series001 = [
  {
    data: [10, 41, 35, 51, 49, 62],
  },
];

const series002 = [
  {
    data: [41, 49, 62, 10, 35, 51],
  },
];

const series003 = [
  {
    data: [10, 35, 41, 49, 51, 62],
  },
];

const options: ApexOptions = {
  chart: {
    height: 100,
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
};

export { options, series001, series002, series003 };
