import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import AppStyleContainer from "./AppStyleContainer";
import AnalystEstimate from "./components/AnalystEstimate/AnalystEstimate";
import CandleStickChart from "./components/Chart/CandleStickChart";
import KeyRatio from "./components/KeyRatio/KeyRatio";
import News from "./components/News/News";
import { useGlobalState } from "./state/useGlobalState";

function App() {
  const { stockData, setStockData } = useGlobalState((state) => {
    return {
      stockData: state.stockData,
      setStockData: state.setStockData,
    };
  }, shallow);

  useEffect(() => {
    fetch("/financialConfig.json")
      .then((res) => res.json())
      .then((data) => {
        setStockData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    stockData && (
      <AppStyleContainer>
        <div className="right-container">
          <CandleStickChart tickerTitle={stockData.ticker} />
          <KeyRatio data={stockData} />
        </div>
        <div className="left-container">
          <News />
          <AnalystEstimate data={stockData} />
        </div>
      </AppStyleContainer>
    )
  );
}

export default App;
