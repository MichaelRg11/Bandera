import { createGlobalStyle, css } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyles = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  code {
    font-family: "Rubik";
    letter-spacing: -3.11px;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
    margin: 0;
    font-family: "Rubik";
  }

  body::-webkit-scrollbar {
    width: 6px;     /* Tamaño del scroll en vertical */
    height: 4px;    /* Tamaño del scroll en horizontal */
    display: block;  /* Ocultar scroll */
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  body::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  body::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  }
  
  /* Cambiamos el fondo cuando esté en active */
  body::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  .scroll-containe::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 10px;
  }
  /* Cambiamos el fondo cuando esté en active o hover */
  .scroll-containe::-webkit-scrollbar-track:hover,
  .scroll-containe::-webkit-scrollbar-track:active {
  background: #d4d4d4;
  }   

  ${props => props.dark && css`
    h1, h2, h3, h4, h5, p {
      color: #fff;
    }

    body{
      background: #2b3743;
    }

    button {
      color: #fff;
    }

    div{
      background: #2b3743;
      border: none !important;
    }

    select {
      background: #2b3743 !important;
      color: #fff !important;
      border: none !important;
      box-shadow: 0 0 10px rgb(255, 255, 255, 0.2)
    }

    input{
      background: #2b3743 !important;
      color: #fff !important;
      border: none !important;
      box-shadow: 0 0 10px rgb(255, 255, 255, 0.2)
    }

    a{
      color: #fff !important;
      border: none !important;
      box-shadow: 0 0 10px rgb(255, 255, 255, 0.2)
    }
  `}
`