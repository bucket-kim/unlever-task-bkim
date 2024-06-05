import gsap from "gsap";
import { Fragment, Suspense, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import AppStyleContainer from "./AppStyleContainer";
import AnalystEstimate from "./components/AnalystEstimate/AnalystEstimate";
import Article from "./components/Article/Article";
import CandleStickChart from "./components/Chart/CandleStickChart";
import KeyRatio from "./components/KeyRatio/KeyRatio";
import Loading from "./components/Loading/Loading";
import News from "./components/News/News";
import R3F from "./components/R3F/R3F";
import { useGlobalState } from "./state/useGlobalState";

function App() {
  const { stockData, setStockData, loadingDone } = useGlobalState((state) => {
    return {
      stockData: state.stockData,
      setStockData: state.setStockData,
      loadingDone: state.loadingDone,
    };
  }, shallow);

  const chartRef = useRef<HTMLDivElement>(null);
  const ratioRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const analystRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/financialConfig.json")
      .then((res) => res.json())
      .then((data) => {
        setStockData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (
      !chartRef.current ||
      !ratioRef.current ||
      !newsRef.current ||
      !analystRef.current
    )
      return;
    loadingDone &&
      gsap.fromTo(
        [
          chartRef.current,
          ratioRef.current,
          newsRef.current,
          analystRef.current,
        ],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.5,
          stagger: 0.15,
        },
      );
  }, [loadingDone]);

  return (
    <Fragment>
      <Loading />
      <Suspense fallback={null}>
        <R3F />
        {stockData && (
          <AppStyleContainer>
            <h1 className="header">UNLEVERED STOCK</h1>
            <div className="right-container">
              <CandleStickChart tickerTitle={stockData.ticker} ref={chartRef} />
              <KeyRatio data={stockData} ref={ratioRef} />
            </div>
            <div className="left-container">
              <News ref={newsRef} />
              <AnalystEstimate data={stockData} ref={analystRef} />
            </div>
            <Article />
          </AppStyleContainer>
        )}
      </Suspense>
    </Fragment>
  );
}

export default App;
