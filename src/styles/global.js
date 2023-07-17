import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }
  button {
    border: none;
    cursor: pointer;
  }
  input {
    border: 1px solid black;
  }
`;

export default GlobalStyles;
