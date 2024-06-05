import styled from "styled-components";

const AppStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  /* background: rgb(0, 9, 62); */
  /* background-image: linear-gradient(135deg, #f9f9f9 0%, #d6dfe8 100%); */
  /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  /* pointer-events: none; */
  .header {
    margin: 0;
    position: absolute;
    top: 2rem;
    color: #948cf1;
    font-size: 5rem;
  }

  .right-container {
    margin-top: 4rem;
  }
  .left-container {
    margin-top: 4rem;
    margin-left: 2rem;
  }
`;

export default AppStyleContainer;
