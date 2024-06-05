import { forwardRef } from "react";
import ReactApexChart from "react-apexcharts";
import CandleStickChartStyleContainer from "./CandleStickChartStyleContainer";
import { data, options } from "./config";

interface MyComponentProps {
  tickerTitle: string;
}

export type Ref = HTMLDivElement;

const chartOptions = {
  series: [
    {
      data,
    },
  ],
  options,
};
const CandleStickChart = forwardRef<Ref, MyComponentProps>(
  ({ tickerTitle }, ref) => {
    return (
      <CandleStickChartStyleContainer ref={ref}>
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
  },
);

export default CandleStickChart;
