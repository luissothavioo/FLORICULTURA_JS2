import styled from 'styled-components'
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
        height: 36rem;
        justify-content: center;
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
        background-color: #e6e6e6;
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
`