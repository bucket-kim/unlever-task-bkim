import styled from "styled-components";

const NewsStyleContainer = styled.div`
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  /* overflow: hidden; */

  .swiper {
    border-radius: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 1);
    width: 100%;
    height: 100%;
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
  }

  .news-summary {
  }

  .news-sentiment {
    .sentiment-score,
    .sentiment-value {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default NewsStyleContainer;
