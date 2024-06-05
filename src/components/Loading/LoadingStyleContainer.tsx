import styled from "styled-components";

const LoadingStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(135deg, #f9f9f9 0%, #d6dfe8 100%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;

  .loading-boxes {
    display: flex;
    align-items: center;
    justify-content: center;
    .box {
      margin: 0rem 0.1rem;
      width: 1rem;
      height: 5rem;
      border-radius: 0.2rem;
      background-color: white;
    }
  }
`;

export default LoadingStyleContainer;
