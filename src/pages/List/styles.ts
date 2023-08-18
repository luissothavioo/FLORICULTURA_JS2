import styled from 'styled-components'
import {colors} from "../../styles/GlobalStyle"

export const Section = styled.section`
  background-color: ${colors.white};
  
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;

  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
