import { forwardRef } from "react";
import KeyRatioStyleContainer from "./KeyRatioStyleContainer";
import RatioLabel from "./RatioLabel";

interface dataProps {
  data: any;
}

export type Ref = HTMLDivElement;

const KeyRatio = forwardRef<Ref, dataProps>(({ data }, ref) => {
  return (
    <KeyRatioStyleContainer ref={ref}>
      <RatioLabel ratioTitle="Market Cap" data={data.market_ap} />
      <RatioLabel
        ratioTitle="Shares Outstanding"
        data={data.shares_outstanding}
      />
      <RatioLabel ratioTitle="P/E Ratio" data={data.pe_ratio} />
      <RatioLabel ratioTitle="P/S ratio Cap" data={data.ps_ratio} />
      <RatioLabel ratioTitle="P/B ratio" data={data.pb_ratio} />
      <RatioLabel ratioTitle="PEG Ratio" data={data.peg_ratio} />
      <RatioLabel ratioTitle="Current Ratio" data={data.current_ratio} />
      <RatioLabel
        ratioTitle="Debt to Equity Ratio"
        data={data.debt_to_equity_ratio}
      />
      <RatioLabel ratioTitle="EPS" data={data.eps} />
    </KeyRatioStyleContainer>
  );
});

export default KeyRatio;
