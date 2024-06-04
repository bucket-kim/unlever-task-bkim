import { useEffect, useState } from "react";
import AppStyleContainer from "./AppStyleContainer";
import AnalystEstimate from "./components/AnalystEstimate/AnalystEstimate";
import CandleStickChart from "./components/Chart/CandleStickChart";
import KeyRatio from "./components/KeyRatio/KeyRatio";
import News from "./components/News/News";

function App() {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch("/financialConfig.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  return (
    <AppStyleContainer>
      <div className="right-container">
        <CandleStickChart tickerTitle={data.ticker} />
        <KeyRatio data={data} />
      </div>
      <div className="left-container">
        <News />
        <AnalystEstimate />
      </div>
    </AppStyleContainer>
  );
}

export default App;
