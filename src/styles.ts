import { createGlobalStyle } from 'styled-components'
import europa from './assets/fonts/EuropaGroteskSH-Ex.otf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "Europa";
      src: url(${europa}) format("falsetype");
      font-weight: normal;
      font-style: normal;
  }

  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: "Europa", sans-serif;
  }
`
