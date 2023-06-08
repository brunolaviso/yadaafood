import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, button {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #1b1b1b;
  }

  .container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }


`

export default GlobalStyle