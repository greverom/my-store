import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: Arial, sans-serif;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  min-height: calc(100vh - 60px); 
  background: radial-gradient(circle, rgba(233, 242, 250, 0.5) 100%, rgba(255, 255, 255, 0.88) 100%);
  overflow-x: auto;
`;