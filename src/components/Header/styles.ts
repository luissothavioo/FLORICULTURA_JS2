import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  height: 6rem;
  display: flex;
  flex-direction: row;
  background-color: ${colors.black};
  border-bottom: 0.7rem solid ${colors.grey};
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  picture {
    width: 2rem;
    padding: 0.5rem 0rem 0.5rem 5rem;
    img {
      width: 4rem;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: white;
        padding: 1rem;
        font-size: large;
      }
      a:hover {
        text-decoration: none;
        color: ${colors.primary};
      }
    }
  }
  h2 {
    color: white;
  }

`