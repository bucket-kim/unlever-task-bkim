import styled from "styled-components";

const KeyRatioStyleContainer = styled.div`
  opacity: 0;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .ratio-label {
    width: 14rem;
    height: 2rem;
    background: white;
    border-radius: 1rem;
    margin: 0.4rem;
    padding: 0.6rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);

    span {
      font-weight: 800;
    }
  }
  .ratio-label:nth-child(1) {
    grid-area: 1/ 1/ 2/ 2;
  }
  .ratio-label:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  .ratio-label:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  .ratio-label:nth-child(4) {
    grid-area: 1 / 2 / 2 / 3;
  }
  .ratio-label:nth-child(5) {
    grid-area: 2 / 2 / 3 / 3;
  }
  .ratio-label:nth-child(6) {
    grid-area: 3 / 2 / 4 / 3;
  }
  .ratio-label:nth-child(7) {
    grid-area: 1 / 3 / 2 / 4;
  }
  .ratio-label:nth-child(8) {
    grid-area: 2 / 3 / 3 / 4;
  }
  .ratio-label:nth-child(9) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export default KeyRatioStyleContainer;
