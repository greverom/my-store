import { styled } from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #007bff;
`;

export const SubtitleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px; 
  overflow: hidden; 
  font-size: 1.5rem;

  
  .scroll-text {
    display: flex;
    white-space: nowrap;

  }
`;

