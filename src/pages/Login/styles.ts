import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  legend {
    color: ${colors.primary};
    text-align: center;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  label {
    color: ${colors.primary};
    font-weight: 500;
    font-size: 2rem;
  }
  form {
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: 1px solid ${colors.primary};
    margin-top: 10rem;

    display: grid;
    padding: 1rem;
    border-radius: 2rem;
    width: 22rem;
    height: 38rem;
    justify-content: center;
    backdrop-filter: blur(20px);

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
      font-size: 20px;
      a{
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
      }
    }
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
`