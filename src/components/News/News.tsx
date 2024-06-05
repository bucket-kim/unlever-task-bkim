import { forwardRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../state/useGlobalState";
import NewsStyleContainer from "./NewsStyleContainer";

import { Autoplay } from "swiper/modules";

interface newsProps {}

export type Ref = HTMLDivElement;

const News = forwardRef<Ref, newsProps>(({ ...props }, ref) => {
  const { stockData, setArticle } = useGlobalState((state) => {
    return { stockData: state.stockData, setArticle: state.setArticle };
  }, shallow);

  return (
    <NewsStyleContainer ref={ref} {...props}>
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
        <SwiperSlide onClick={() => setArticle("article1")}>
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
        <SwiperSlide onClick={() => setArticle("article2")}>
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
        <SwiperSlide onClick={() => setArticle("article3")}>
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
});

export default News;
