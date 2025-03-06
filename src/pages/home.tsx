import { useRef } from "react";
import { HomeContainer, ScrollingText, SubtitleContainer, Title } from "../styles/home.style";

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
      <ScrollingText ref={subtitleRef}>
        <span>{subtitleText}</span>
        <span>{subtitleText}</span>
        <span>{subtitleText}</span>
      </ScrollingText>
    </SubtitleContainer>
  </HomeContainer>
  );
};

export default Home;