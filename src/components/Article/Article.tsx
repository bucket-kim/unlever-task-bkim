import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../state/useGlobalState";
import ArticleStyleContainer from "./ArticleStyleContainer";

const Article = () => {
  const { article, setArticle } = useGlobalState((state) => {
    return {
      article: state.article,
      setArticle: state.setArticle,
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
    switch (article) {
      case "article01":
        seTitle("Article 1");
        setSummary("This is Article 1");
        setScore("0.9");
        setValue("positive");
        break;
      case "article02":
        seTitle("Article 2");
        setSummary("This is Article 2");
        setScore("0.67");
        setValue("negative");
        break;
      case "article03":
        seTitle("Article 3");
        setSummary("This is Article 3");
        setScore("0.559");
        setValue("positive");
        break;
    }
  }, [article]);

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
