import "@csstools/normalize.css";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}
* {
    box-sizing: border-box;
}
body {
  min-height: 100vh;  
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  line-height: normal;
  color: ${theme.colors.black};
  background-color: ${theme.colors.bgColorPage};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: 'Manrope', sans-serif;
  cursor: pointer;
  color: inherit;
}

input, textarea {
  outline: transparent;
}
`;
