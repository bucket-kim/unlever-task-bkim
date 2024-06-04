import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#3a399c",
        downward: "#948cf1",
      },
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  chart: {
    type: "candlestick",
    height: 290,
    id: "candles",
    toolbar: {
      autoSelected: "pan",
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
};

let data = [
  {
    x: new Date(1538784000000),
    y: [189.59, 190.028, 189.419, 189.664],
  },
  {
    x: new Date(1538785800000),
    y: [189.664, 189.714, 189.142, 189.27],
  },
  {
    x: new Date(1538787600000),
    y: [189.272, 189.6, 189.19, 189.266],
  },
  {
    x: new Date(1538789400000),
    y: [189.275, 189.057, 189.057, 189.315],
  },
  {
    x: new Date(1538791200000),
    y: [189.343, 189.361, 188.121, 188.658],
  },
  {
    x: new Date(1538793000000),
    y: [188.714, 188.801, 188.541, 188.686],
  },
  {
    x: new Date(1538794800000),
    y: [188.7, 188.983, 188.636, 188.801],
  },
  {
    x: new Date(1538796600000),
    y: [188.801, 188.877, 188.628, 188.826],
  },
  {
    x: new Date(1538798400000),
    y: [188.826, 189.114, 188.8, 188.914],
  },
  {
    x: new Date(1538800200000),
    y: [188.914, 189.004, 188.717, 188.914],
  },
  {
    x: new Date(1538802000000),
    y: [188.914, 189.261, 188.812, 189.227],
  },
  {
    x: new Date(1538803800000),
    y: [189.255, 189.255, 189.0, 189.019],
  },
  {
    x: new Date(1538805600000),
    y: [189.105, 189.107, 188.857, 188.869],
  },
  {
    x: new Date(1538807400000),
    y: [188.886, 189.222, 188.869, 188.997],
  },
  {
    x: new Date(1538809200000),
    y: [188.997, 189.32, 188.952, 189.241],
  },
  {
    x: new Date(1538811000000),
    y: [189.242, 189.343, 189.097, 189.153],
  },
  {
    x: new Date(1538812800000),
    y: [189.127, 189.153, 188.859, 189.015],
  },
  {
    x: new Date(1538814600000),
    y: [189.015, 189.084, 188.857, 189.005],
  },
  {
    x: new Date(1538816400000),
    y: [189.005, 189.189, 188.806, 189.143],
  },
  {
    x: new Date(1538818200000),
    y: [189.13, 189.291, 188.976, 189.143],
  },
  {
    x: new Date(1538820000000),
    y: [189.152, 189.547, 189.064, 189.275],
  },
  {
    x: new Date(1538821800000),
    y: [189.313, 189.314, 188.905, 189.074],
  },
  {
    x: new Date(1538823600000),
    y: [189.114, 189.313, 188.436, 188.539],
  },
  {
    x: new Date(1538825400000),
    y: [188.539, 188.539, 187.714, 188.205],
  },
  {
    x: new Date(1538827200000),
    y: [188.253, 188.571, 188.0, 188.383],
  },
  {
    x: new Date(1538829000000),
    y: [188.4, 188.54, 188.143, 188.223],
  },
  {
    x: new Date(1538830800000),
    y: [188.223, 188.364, 187.633, 187.943],
  },
  {
    x: new Date(1538832600000),
    y: [187.953, 188.049, 187.64, 187.971],
  },
  {
    x: new Date(1538834400000),
    y: [187.982, 188.026, 187.622, 187.885],
  },
  {
    x: new Date(1538836200000),
    y: [187.885, 188.257, 188.257, 188.255],
  },
  {
    x: new Date(1538838000000),
    y: [188.255, 188.4, 187.93, 188.263],
  },
  {
    x: new Date(1538839800000),
    y: [188.266, 188.54, 188.26, 188.459],
  },
  {
    x: new Date(1538841600000),
    y: [188.5, 188.571, 188.24, 188.464],
  },
  {
    x: new Date(1538843400000),
    y: [188.515, 188.571, 188.249, 188.456],
  },
  {
    x: new Date(1538845200000),
    y: [188.456, 188.456, 188.233, 188.629],
  },
  {
    x: new Date(1538847000000),
    y: [188.629, 188.771, 188.472, 188.57],
  },
  {
    x: new Date(1538848800000),
    y: [188.589, 188.606, 188.297, 188.315],
  },
  {
    x: new Date(1538850600000),
    y: [188.315, 188.659, 188.314, 188.314],
  },
  {
    x: new Date(1538852400000),
    y: [188.314, 188.609, 188.143, 188.343],
  },
  {
    x: new Date(1538854200000),
    y: [188.375, 188.457, 188.286, 188.381],
  },
  {
    x: new Date(1538856000000),
    y: [188.381, 188.707, 188.075, 188.396],
  },
  {
    x: new Date(1538857800000),
    y: [188.396, 188.694, 188.188, 188.572],
  },
  {
    x: new Date(1538859600000),
    y: [188.623, 188.663, 188.365, 188.464],
  },
  {
    x: new Date(1538861400000),
    y: [188.464, 188.691, 188.286, 188.657],
  },
  {
    x: new Date(1538863200000),
    y: [188.657, 188.743, 188.143, 188.223],
  },
  {
    x: new Date(1538865000000),
    y: [188.223, 188.429, 188.093, 188.342],
  },
  {
    x: new Date(1538866800000),
    y: [188.342, 188.459, 188.143, 188.24],
  },
  {
    x: new Date(1538868600000),
    y: [188.217, 188.52, 188.217, 188.408],
  },
];

export { data, options };
