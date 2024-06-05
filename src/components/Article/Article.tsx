import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../state/useGlobalState";
import ArticleStyleContainer from "./ArticleStyleContainer";

const Article = () => {
  const { article, setArticle, stockData } = useGlobalState((state) => {
    return {
      article: state.article,
      setArticle: state.setArticle,
      stockData: state.stockData,
    };
  }, shallow);

  const [title, seTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [score, setScore] = useState("");
  const [value, setValue] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (article !== null) {
      gsap.to(containerRef.current, {
        opacity: 1,
        visibility: "visible",
      });
    } else {
      gsap.to(containerRef.current, {
        opacity: 0,
        onComplete: () => {
          if (!containerRef.current) return;
          containerRef.current.style.visibility = "hidden";
        },
      });
    }
  }, [article]);

  useEffect(() => {
    if (!stockData || !stockData.news) return;

    const updateArticleData = (articleKey: any) => {
      const articleData = stockData.news[articleKey];
      if (!articleData) return;

      seTitle(`Article ${articleKey.replace("article", "")}`);
      setSummary(articleData.summary);
      setScore(articleData.sentiment.score);
      setValue(articleData.sentiment.value);
    };

    updateArticleData(article);
  }, [article, stockData]);

  return (
    <ArticleStyleContainer ref={containerRef}>
      <div className="article-container">
        <button onClick={() => setArticle(null)}>X</button>
        <h1>{title}</h1>
        <div className="article-paragraph">
          <p>{summary}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
            illum consequatur eligendi fugiat excepturi illo dignissimos qui.
            Asperiores illo ab deserunt voluptatem soluta eligendi minus tenetur
            modi vel eaque?
          </p>
        </div>
        <div className="sentiment">
          <p>Score: {score}</p>
          <p>Value: {value}</p>
        </div>
      </div>
    </ArticleStyleContainer>
  );
};

export default Article;
