import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../state/useGlobalState";
import NewsStyleContainer from "./NewsStyleContainer";

import { Autoplay } from "swiper/modules";

const News: FC = () => {
  const { stockData, setArticle } = useGlobalState((state) => {
    return { stockData: state.stockData, setArticle: state.setArticle };
  }, shallow);

  return (
    <NewsStyleContainer>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide onClick={() => setArticle("article01")}>
          <div className="news-summary">
            <h1>Article 1</h1>
            <p>{stockData.news.article1.summary}.</p>
          </div>
          <div className="news-sentiment">
            <div className="sentiment-score">
              <p>Score: </p>
              <label className="score">
                {stockData.news.article1.sentiment.score}
              </label>
            </div>
            <div className="sentiment-value">
              <p>Value: </p>
              <label className="value">
                {stockData.news.article1.sentiment.value}
              </label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setArticle("article02")}>
          <div className="news-summary">
            <h1>Article 2</h1>
            <p>{stockData.news.article2.summary}.</p>
          </div>
          <div className="news-sentiment">
            <div className="sentiment-score">
              <p>Score: </p>
              <label className="score">
                {stockData.news.article2.sentiment.score}
              </label>
            </div>
            <div className="sentiment-value">
              <p>Value: </p>
              <label className="value">
                {stockData.news.article2.sentiment.value}
              </label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setArticle("article03")}>
          <div className="news-summary">
            <h1>Article 3</h1>
            <p>{stockData.news.article3.summary}.</p>
          </div>
          <div className="news-sentiment">
            <div className="sentiment-score">
              <p>Score: </p>
              <label className="score">
                {stockData.news.article3.sentiment.score}
              </label>
            </div>
            <div className="sentiment-value">
              <p>Value: </p>
              <label className="value">
                {stockData.news.article3.sentiment.value}
              </label>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </NewsStyleContainer>
  );
};

export default News;
