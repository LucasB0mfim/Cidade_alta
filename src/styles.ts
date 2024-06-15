import { createGlobalStyle } from 'styled-components'
import gta from './assets/fonts/pricedown.otf'

export const colors = {
  black: '#1d1d1d',
  yellow: '#f9b036',
  white: '#fff',
  gray: '#2c2c2c',
  beige: '#feda99',
  lightYellow: '#ffecac',
  lightGray: '#949494'
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
`
