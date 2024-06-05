import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import { useGlobalState } from "../../state/useGlobalState";
import LoadingStyleContainer from "./LoadingStyleContainer";

const Loading = () => {
  const { loaded, total } = useProgress();

  const { setLoadingDone } = useGlobalState((state) => {
    return {
      setLoadingDone: state.setLoadingDone,
    };
  });

  const loaderRef = useRef<HTMLDivElement>(null);

  const handleAnimation = useCallback(() => {
    if (!loaderRef.current) return;
    if (loaded === total) {
      gsap.fromTo(
        loaderRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          onComplete: () => {
            if (!loaderRef.current) return;
            loaderRef.current.style.visibility = "hidden";
            setLoadingDone(true);
          },
        },
      );
    }
  }, [loaded]);

  useEffect(handleAnimation, [handleAnimation]);

  useEffect(() => {
    const boxClass = document.querySelectorAll(".box");
    const boxTL = gsap.timeline({ paused: true });
    boxTL
      .to(boxClass, {
        scaleY: 0.1,
        transformOrigin: "bottom",
        stagger: -0.2,
      })
      .to(boxClass, {
        scaleY: 1,
        ease: "power1.inOut",
        stagger: -0.2,
      });
    boxTL.repeat(-1);
    boxTL.play();
    return () => {
      boxTL.kill();
    };
  }, []);

  return (
    <LoadingStyleContainer ref={loaderRef}>
      <div className="loading-boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </LoadingStyleContainer>
  );
};

export default Loading;
