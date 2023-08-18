import styled from 'styled-components'
import {colors} from "../../styles/GlobalStyle"

export const Section = styled.section`
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        padding-top: 3rem;
    }
    fieldset {
        display: grid;
        padding: 1rem;
    }

    label {
       padding-bottom: 1rem;
       justify-content: center;
    }

    input {
        padding: 0rem 0.5rem ;
        
    }

    input.botao {

        height: 5rem;
        width: 5rem;

        border-color: ${colors.primary};
        background-color: ${colors.primary_light};
        color: ${colors.black};

        border-radius: 50%;
        border: 0.7;

        font-size: 1rem;
        font-weight: bolder;
        cursor: pointer;
    }

    div {
        border-radius: 5px;
        outline: 0;
        border: 1px solid #000;
        height: 5rem;
    }
`