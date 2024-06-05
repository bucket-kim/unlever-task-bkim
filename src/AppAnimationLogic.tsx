import gsap from "gsap";

const appAnimationHandle = (
  chartRef: HTMLDivElement,
  ratioRef: HTMLDivElement,
  newsRef: HTMLDivElement,
  analystRef: HTMLDivElement,
) => {
  gsap.fromTo(
    [chartRef, ratioRef, newsRef, analystRef],
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 1,
      stagger: 0.15,
    },
  );
};

export { appAnimationHandle };
