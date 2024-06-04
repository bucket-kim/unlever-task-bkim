import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";

interface dataProps {
  ratioTitle: string;
  data: any;
}

const RatioLabel: FC<dataProps> = ({ ratioTitle, data }) => {
  const [hover, setHover] = useState<boolean>(false);

  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!labelRef.current) return;
    gsap.to(labelRef.current, {
      scale: hover ? 1.05 : 1,
      duration: 0.2,
    });
  }, [hover]);

  return (
    <div
      ref={labelRef}
      className="ratio-label"
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <p>{ratioTitle}</p>
      <span>{data}</span>
    </div>
  );
};

export default RatioLabel;
