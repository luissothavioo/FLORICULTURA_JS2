import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section `
    div{
        position: fixed;
        width: 35px;
        height: 35px;
        right: 20px;
        top: 30px;

        span{
            display: block;
            z-index: 999;
            width: 35px;
            height: 5px;
            margin-bottom: 10px;
            background-color: ${colors.grey};
            border-radius: 3px;
            transition: all ease .2s;
        }
    }

    ul{
        position: fixed;
        z-index: 999;
        transition: all ease .2s;
        display: none;
        backdrop-filter: blur(20px);

        li {
            list-style-type: none;
            font-weight: bolder;
            width: 8rem;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 12px;

            a{
                text-decoration: none;
                color: white;
                font-weight: bolder;
            }
            
            :hover {
                    color: ${colors.primary};
            }
        }
    }

    .hamburguer{
        position: fixed;
        z-index: 1000;
        height: 35px;
        width: 35px;
        top: 45px;
        cursor: pointer;
        opacity: 0;
        right: 20px;
    }

    .hamburguer:checked{
        right: 11rem;
    }

    .hamburguer:checked ~ div{
        right: 11rem;
    }

    .hamburguer:checked ~ div span{
        background-color: ${colors.primary};
    }

    .hamburguer:checked ~ div span:nth-child(1){
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.25);
    }

    .hamburguer:checked ~ div span:nth-child(2){
        opacity: 0;
    }

    .hamburguer:checked ~ div span:nth-child(3){
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.25);
    }

    .hamburguer:checked ~ ul{
        margin-right: 0;
        right: 0;
        display: block;
    }
`