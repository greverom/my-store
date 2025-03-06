import { useEffect } from "react";
import gsap from "gsap";

export const useGsapHoverTitle = (
  titleRef: React.RefObject<HTMLDivElement | null>, 
  isHovered: boolean
) => {
    
  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement || !isHovered) return; 

    const animation = gsap.to(titleElement, {
      x: "-80%",
      duration: 8,
      ease: "linear",
      repeat: -1,
      paused: true,
    });

    animation.play(); 

    return () => {
      animation.kill(); 
      gsap.set(titleElement, { x: "0%" }); 
    };
  }, [titleRef, isHovered]);
};