import { useRef } from "react";
import { HomeContainer, SubtitleContainer } from "../styles/home.style";
import { Title } from "../styles/shopping.style";
import { useGsapTitle } from "../hooks/animation/useGsapTitle";

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);

  useGsapTitle(titleRef, subtitleRef);

  const subtitleText = "Explora nuestra colección y encuentra lo que buscas.";

  return (
    <HomeContainer>
      <Title ref={titleRef}>🛍️ Bienvenido a la Tienda 🛍️</Title>
      <SubtitleContainer>
        <div ref={subtitleRef} className="scroll-text">
           <span>{subtitleText}</span>
           <span>{subtitleText}</span> 
        </div>
      </SubtitleContainer>
    </HomeContainer>
  );
};

export default Home;