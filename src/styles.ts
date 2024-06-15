import { createGlobalStyle } from 'styled-components'
import gta from './assets/fonts/pricedown.otf'

export const colors = {
  black: '#1d1d1d',
  yellow: 'rgb(255, 192, 70)',
  white: '#fff',
  gray: '#2c2c2c'
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "gta";
      src: url(${gta}) format("truetype");
      font-weight: normal;
      font-style: normal;
  }

  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: "gta", sans-serif;
  }

  body {
    background: rgb(47, 51, 79);
  }
`
