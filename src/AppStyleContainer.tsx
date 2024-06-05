import styled from "styled-components";

const AppStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  overflow-x: hidden;
  /* pointer-events: none; */
  .header {
    width: 100%;
    text-align: center;
    /* position: absolute; */
    margin: 0;
    color: #948cf1;
    font-size: 5rem;
  }
  .container {
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .right-container {
      margin-top: 4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .left-container {
      height: 100%;
      margin-top: 4rem;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      height: 100%;
    }
  }
  @media only screen and (max-width: 460px) {
    .header {
      font-size: 2.25rem;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 8rem;
      height: 100%;
      .right-container {
        margin-top: 0rem;
      }
      .left-container {
        margin-top: 2rem;
        margin-left: 0rem;
      }
    }
  }
`;

export default AppStyleContainer;
