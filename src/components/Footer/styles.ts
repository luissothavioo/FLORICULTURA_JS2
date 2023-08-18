import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
  /* Rodapé */
  height: 4rem;
  width: 100%;
  display: flex;
  background-color: ${colors.grey};
  border-top: 0.7rem solid ${colors.black};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem; 
  align-items: center;

  section{
    width: 50%;
    height: 70%;
    padding-left: 5rem;
    justify-content: left;

    img {
      padding-right: 1.5rem;
    }
  }
  aside {
    width: 50%;
    height: 90%;
    padding-left: 50rem;

    img.logo {
      width: 4rem;
      height: 90%;
      padding-right: 2rem;
    }
  }
  
`
