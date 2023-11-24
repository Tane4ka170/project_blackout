import { createGlobalStyle } from 'styled-components';
import fontBold from '../fonts/Suisse-Intl-Bold.ttf';
import fontRegular from '../fonts/SuisseIntl-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'Suisse Intl';
  font-weight: 400 600 700;
  src: url(${fontBold},url(${fontRegular}) ;
}
body{
font-family: 'Suisse Intl', sans-serif;
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

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}`;
