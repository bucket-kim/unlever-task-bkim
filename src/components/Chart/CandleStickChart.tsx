import { FC, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import CandleStickChartStyleContainer from "./CandleStickChartStyleContainer";
import { data, options } from "./config";

interface MyComponentProps {
  tickerTitle: string;
}

const chartOptions = {
  series: [
    {
      data,
    },
  ],
  options,
};
const CandleStickChart: FC<MyComponentProps> = ({ tickerTitle }) => {
  useEffect(() => {
    data.map((info: any) => {
      for (let i = 0; i <= info.y.length; i++) {
        return info.y[i].toFixed(3);
      }
    });
  }, []);

  return (
    <CandleStickChartStyleContainer>
      <h1>{tickerTitle}</h1>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="candlestick"
        height={320}
        width={720}
      />
    </CandleStickChartStyleContainer>
  );
};

export default CandleStickChart;
