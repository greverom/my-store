import { useEffect } from "react";
import gsap from "gsap";

export const useGsapTitle = (
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  subtitleRef: React.RefObject<HTMLDivElement | null> 
) => {
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    );


    gsap.to(subtitleRef.current, {
      x: "-181%", 
      duration: 8,
      ease: "linear",
      repeat: -1, 
    });
  }, [titleRef, subtitleRef]);
};