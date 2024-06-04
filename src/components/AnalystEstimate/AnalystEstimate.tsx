import gsap from "gsap";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
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

const AnalystEstimate: FC<AnalystProps> = ({ data }) => {
  const [buttonText, setButtonText] = useState("Citibank");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const listRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setOpenMenu((prev) => !prev);
  };

  const listOpenAnimation = useCallback(() => {
    if (!listRef.current) return;

    if (openMenu) {
      gsap.to(listRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.2,
      });
    } else {
      gsap.to(listRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          if (!listRef.current) return;
          listRef.current.style.visibility = "hidden";
        },
      });
    }
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

  return (
    <AnalystEstimateStyleContainer>
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
          height={300}
          type="line"
        />
      )}
      {buttonText === "Goldman Sachs" && (
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series002}
          height={300}
          type="line"
        />
      )}
      {buttonText === "Morgan Stanley" && (
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series003}
          height={300}
          type="line"
        />
      )}
    </AnalystEstimateStyleContainer>
  );
};

export default AnalystEstimate;
