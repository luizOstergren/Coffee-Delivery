import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    body{
        background-color: ${props => props.theme.background};
        -webkit-font-smoothing: antialiased;
        margin: 0 10rem;

        @media (max-width: 1200px) {
            margin: 0 8rem; 
        }
       
        @media (max-width: 950px) {
            margin: 0 4rem; 
        }
        
        @media (max-width: 850px) {
            margin: 0 2rem; 
        }
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
        line-height: 130%;
    }    
`