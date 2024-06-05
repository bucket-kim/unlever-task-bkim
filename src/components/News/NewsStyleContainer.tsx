import styled from "styled-components";

const NewsStyleContainer = styled.div`
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  /* overflow: hidden; */
  /* opacity: 0; */

  .swiper {
    border-radius: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 1);
    width: 100%;
    height: 100%;
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
    margin-left: -1.5rem;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    cursor: pointer;
  }

  .news-summary {
    h1 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }

  .news-sentiment {
    .sentiment-score,
    .sentiment-value {
      p {
        margin: 0;
      }
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 300px;
    height: 160px;
  }
  @media only screen and (max-width: 460px) {
    width: 300px;
    height: 120px;
    .swiper {
      padding: 0.5rem 1.5rem;
    }
  }
`;

export default NewsStyleContainer;
