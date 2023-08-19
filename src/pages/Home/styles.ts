import styled from 'styled-components'
import {colors} from "../../styles/GlobalStyle"

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  padding-top: 5rem;
  gap: 3rem;

  img {
    width: 50%;
  }
  div {
    display: block;
    background: rgb(168, 15, 21);
    background: linear-gradient(220deg, rgba(168, 15, 21, 0.9) 29%, rgba(215, 73, 79, 0.8) 100%);
    border-radius: 2rem;
    height: 253px;
    width: 380px;
    h2 {
      font-family: "Gravitas One";
      font-size: 50px;
      color: #300507;
      padding: 2rem;
      pointer-events: none;
    }
  }

  picture {
    display: block;
    height: 253px;
    width: 380px;
    background: rgb(168, 15, 21);
    background: linear-gradient(220deg, rgba(168, 15, 21, 1) 29%, rgba(215, 73, 79, 1) 100%);
    border-radius: 2rem;
    img {
      height: 253px;
      width: 380px;
      border-radius: 2rem;
      padding: 0.2rem;
    }
    img:hover {
      height: 253px;
      width: 380px;
      border-radius: 2rem;
      padding: 0.4rem;
    }
  }
  
  @media (max-width: 840px) {
    grid-template-columns: auto;
  }
` 
export const Board = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  div {
    display: grid;
    grid-template-columns: auto auto;
    gap: 5rem;
    background: rgb(168, 15, 21);
    background: linear-gradient(220deg, rgba(168, 15, 21, 0.9) 29%, rgba(215, 73, 79, 0.8) 100%);
    border-radius: 2rem;
    height: 253px;
    width: 810px;
  }
  img {
    height: 250px;
    width: auto;
    padding-left: 4rem;
  }
  h2 {
    font-family: "Gravitas One";
    font-size: 45px;
    color: #300507;
    padding: 2rem;
    pointer-events: none;
    padding-top: 2.5rem;
  }
`

