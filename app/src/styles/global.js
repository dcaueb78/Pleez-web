import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .page-restaurant-selected-title {
    color: #22d6bc;
    font-size: 35px;
    margin-left: 35px;
  }

  .page-description {
    margin-left: 28px;
    color: #ee4162;
    font-size: 20px;
  }

  .page-description-title {
    margin-left: 28px;
    margin-top: 10px;
  }

`;
