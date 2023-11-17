import styled, { createGlobalStyle } from "styled-components"
//import planta1 from "../assets/planta1.png"

export const colors = {
  primary: "#A91016",
  primary_light: "#D7494F",
  black: "#1B1B1B",
  white: "#D2D2D2",
  grey: "#6B6B6B"
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  body {
    background-color: ${colors.white};
  }
`

