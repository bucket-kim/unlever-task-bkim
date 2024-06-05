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
    position: relative;
    width: 52rem;
    height: 28rem;
    background: white;
    padding: 3rem;
    border-radius: 2rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);

    .article-paragraph {
      margin-top: 2rem;
      p {
        font-size: 1.5rem;
      }
    }

    button {
      position: absolute;
      right: 2rem;
      border: none;
      background: #948cf1;
      color: white;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }

    h1 {
      margin: 0;
      font-size: 3.6rem;
    }
    .sentiment {
      margin: 0;
      position: absolute;
      bottom: 0;
      left: 2rem;
      display: flex;
      flex-direction: column;
      p {
        font-size: 1.25rem;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    .article-container {
      padding: 1.5rem;
      border-radius: 1rem;
      .article-paragraph {
        p {
          font-size: 1.2rem;
        }
      }
      h1 {
        font-size: 2.6rem;
      }
      .sentiment {
        p {
          font-size: rem;
        }
      }
    }
  }
`;

export default ArticleStyleContainer;
