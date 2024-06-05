import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { handleAnalystAnimation } from "./AnalystEstimateAnimation";
import AnalystEstimateStyleContainer from "./AnalystEstimateStyleContainer";
import { options, series001, series002, series003 } from "./config";

const chartOptions = {
  series001,
  series002,
  series003,
  options,
};

interface AnalystProps {
  data: any;
}

export type Ref = HTMLDivElement;

const AnalystEstimate = forwardRef<Ref, AnalystProps>(({ data }, ref) => {
  const [buttonText, setButtonText] = useState("Citibank");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [chartHeight, setChartHeight] = useState(300);

  const listRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setOpenMenu((prev) => !prev);
  };

  const listOpenAnimation = useCallback(() => {
    if (!listRef.current) return;

    handleAnalystAnimation(listRef.current, openMenu);
  }, [openMenu]);

  useEffect(listOpenAnimation, [listOpenAnimation]);

  useEffect(() => {
    if (
      buttonText === "Citibank" ||
      buttonText === "Goldman Sachs" ||
      buttonText === "Morgan Stanley"
    ) {
      setOpenMenu(false);
    }
  }, [buttonText]);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setChartHeight(260);
    }
    if (window.innerWidth <= 460) {
      setChartHeight(160);
    }
  }, []);

  return (
    <AnalystEstimateStyleContainer ref={ref}>
      <button onClick={handleButtonClick}>Choose Ticker</button>
      <div className="ticker-lists" ref={listRef}>
        <ul>
          <li onClick={() => setButtonText("Citibank")}>Citibank</li>
          <li onClick={() => setButtonText("Goldman Sachs")}>Goldman Sachs</li>
          <li onClick={() => setButtonText("Morgan Stanley")}>
            Morgan Stanley
          </li>
        </ul>
      </div>
      <div className="chart-text">
        <h1>{buttonText}</h1>
        <span>{data.analyst_estimates[`${buttonText}`]}</span>
      </div>
      {buttonText === "Citibank" && (
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series001}
          height={chartHeight}
          type="line"
        />
      )}
      {buttonText === "Goldman Sachs" && (
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series002}
          height={chartHeight}
          type="line"
        />
      )}
      {buttonText === "Morgan Stanley" && (
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series003}
          height={chartHeight}
          type="line"
        />
      )}
    </AnalystEstimateStyleContainer>
  );
});

export default AnalystEstimate;
