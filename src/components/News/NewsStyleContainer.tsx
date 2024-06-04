import styled from "styled-components";

const NewsStyleContainer = styled.div`
  width: 300px;
  height: 160px;
  background: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  padding: 1.5rem;
  position: relative;
  border-radius: 2rem;

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
