import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Pesq = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  label {
    padding: 2rem 0 0 0;
  }
  input {
    padding: 0.5rem 4rem 0.5rem 2rem;
    border-radius: 1rem;
    border-width: 1px;
    background-color: #e6e6e6;
  }
  input.botao {
    height: 2rem;
    width: 6rem;

    border-color: ${colors.primary};
    background-color: ${colors.primary_light};
    color: ${colors.black};

    border-radius: 2rem;

    font-size: 0.8rem;
    font-weight: bolder;
    cursor: pointer;

    padding-left: 1rem;
    padding-right: 1rem;
  }
`
export const Section = styled.section`
  background-color: ${colors.white};
  
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;

  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;

  @media (max-width: 1620px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1230px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 830px) {
    grid-template-columns: auto;
  }
`