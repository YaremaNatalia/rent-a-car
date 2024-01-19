import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const theme = {
  colors: {
    primeryWhite: '#FFFFFF',
    primeryBlack: '#121417',
    primeryBlue: '#3470FF',
    secondaryGray: '#8A8A89',
    secondaryBlue: '#0B44CD',
    secondaryRed: '#EF5050',
    secondaryOrange: '#FF9D43',
  },
};

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  line-height: 1.5;
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};

 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
};

`;
