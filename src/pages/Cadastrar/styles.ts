import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  h1 {
    color: ${colors.primary};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.primary};
    border: 0.2rem solid ${colors.primary_light};
    border-radius: 1rem;
    padding: 1.5rem;
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.primary};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.primary};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
      }
    }
  }
`
/*import styled from 'styled-components'
import {colors} from "../../styles/GlobalStyle"

export const Section = styled.section`
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        padding-top: 3rem;
    }
    fieldset {
        display: grid;
        padding: 1rem;
        border-radius: 2rem;
        width: 22rem;
        height: 38rem;
        justify-content: center;       
        backdrop-filter: blur(20px);
    }
    legend {
        color: ${colors.primary};
        text-align: center;
        font-size: 2rem;
    }

    label {
       padding-bottom: 1rem;
    }
    input {
        padding: 3px 5rem 3px 1rem;
        border-radius: 1rem;
        border-width: 1px;
        background-color: 
    margin-bottom: 0rem;#e6e6e6;
    }
    select {
        border-radius: 1rem;
        background-color: #e6e6e6;
        padding: 2px 20px;
    }
    option {
        background-color: ${colors.primary_light};
        font-weight: bold;
        font-size: 15px;
        color: white;
    }

    label.bot{
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        gap: 1rem;
    }
    input.botao {
        height: 3rem;
        width: 8rem;

        border-color: ${colors.primary};
        background-color: ${colors.primary_light};
        color: ${colors.black};

        border-radius: 2rem;
        border: 0.7;

        font-size: 1rem;
        font-weight: bolder;
        cursor: pointer;

        padding-left: 1rem;
        padding-right: 1rem;
    }

    a{
        font-size: 15px;
        font-style: italic;
        text-align: center;
        color: black;
    }
`*/