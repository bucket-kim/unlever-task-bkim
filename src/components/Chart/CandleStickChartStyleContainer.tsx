import styled from "styled-components";

const CandleStickChartStyleContainer = styled.div`
  opacity: 0;

  .chart-content {
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
    background: rgb(255, 255, 255);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 0.15rem solid rgba(255, 255, 255, 0.3);
    width: 732px;
    height: 420px;

    h1 {
      margin: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    .chart-content {
      width: 500px;
      height: 360px;
    }
  }
  @media only screen and (max-width: 460px) {
    .chart-content {
      width: 340px;
      height: 180px;
      padding: 1rem;

      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CandleStickChartStyleContainer;
