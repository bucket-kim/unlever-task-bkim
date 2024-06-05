import styled from "styled-components";

const ArticleStyleContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  visibility: hidden;

  .article-container {
    width: 52rem;
    height: 28rem;
    background: white;
    padding: 3rem;
    border-radius: 2rem;

    h1 {
      margin: 0;
    }
  }
`;

export default ArticleStyleContainer;
