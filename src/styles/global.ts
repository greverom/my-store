import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #333;
  }

  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 2rem;
    color: #007bff;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;