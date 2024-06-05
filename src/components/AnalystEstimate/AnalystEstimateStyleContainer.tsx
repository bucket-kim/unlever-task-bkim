import styled from "styled-components";

const AnalystEstimateStyleContainer = styled.div`
  margin-top: 4rem;
  padding: 1.5rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  position: relative;
  width: 324px;
  /* opacity: 0; */

  button {
    position: absolute;
    top: -3rem;
    left: 0;
    background: #948cf1;
    border: none;
    color: white;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 4rem;
    cursor: pointer;
  }

  .ticker-lists {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0rem;
    left: 0rem;
    z-index: 2;

    ul {
      border-radius: 1rem;
      background: #3a399c;
      overflow: hidden;
      li {
        list-style: none;
        cursor: pointer;
        padding: 1rem 1.5rem;
        color: white;
        border-bottom: white solid 2px;
      }
    }
  }

  .chart-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .ticker-lists {
      top: -1rem;
    }
  }
  @media only screen and (max-width: 460px) {
    margin-top: 4rem;

    .ticker-lists {
      top: -1rem;
    }
  }
`;

export default AnalystEstimateStyleContainer;
