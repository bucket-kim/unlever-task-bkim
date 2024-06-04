import NewsStyleContainer from "./NewsStyleContainer";

const News = () => {
  return (
    <NewsStyleContainer>
      <div className="news-summary">
        <h1>Article1</h1>
        <p>This is Article1.</p>
      </div>
      <div className="news-sentiment">
        <div className="sentiment-score">
          <p>Score: </p>
          <label className="score">0.67</label>
        </div>
        <div className="sentiment-value">
          <p>Value: </p>
          <label className="value">positive</label>
        </div>
      </div>
    </NewsStyleContainer>
  );
};

export default News;
