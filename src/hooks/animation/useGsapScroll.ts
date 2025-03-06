import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScroll = (elementRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const cards = elementRef.current.children; 

    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 5,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2, 
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%", 
        end: "bottom 30%",
        toggleActions: "play none none none", 
      },
    });
  }, [elementRef]);
};