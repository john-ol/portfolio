import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: ${(props) => props.theme.fonts.weight.regular};
    color: ${(props) => props.theme.colors.main}
    
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .swal2-popup {
  font-size: 1.4rem !important;
  font-family: ${(props) => props.theme.fonts.main};
  background-color: ${(props) => props.theme.colors.main} !important;
  }

  .swal2-popup.swal2-toast .swal2-title {
    color: ${(props) => props.theme.colors.white} !important;
  }
`
