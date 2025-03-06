import { styled } from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #007bff;
`;

export const SubtitleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px; 
  overflow: hidden; 
  font-size: 1.5rem;
  font-weight: bold;
  
  .scroll-text {
    display: flex;
    white-space: nowrap;
    gap: 50px; 
  }
`;

