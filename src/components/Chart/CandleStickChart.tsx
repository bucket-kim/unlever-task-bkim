import { forwardRef, useEffect, useState } from "react";
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
    const [chartWidth, setChartWidth] = useState(720);
    const [chartHeight, setChartHeight] = useState(360);

    useEffect(() => {
      if (window.innerWidth <= 1024) {
        setChartWidth(500);
        setChartHeight(320);
      }
      if (window.innerWidth <= 460) {
        setChartWidth(340);
        setChartHeight(160);
      }
    }, []);

    return (
      <CandleStickChartStyleContainer ref={ref}>
        <div className="chart-content">
          <h1>{tickerTitle}</h1>
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="candlestick"
            height={chartHeight}
            width={chartWidth}
          />
        </div>
      </CandleStickChartStyleContainer>
    );
  },
);

export default CandleStickChart;
