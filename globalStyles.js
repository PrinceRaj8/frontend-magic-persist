import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none; /* Custom cursor */
  }
  body {
    background: black;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;