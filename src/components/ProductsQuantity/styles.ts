import styled from "styled-components"

export const ProductQuantity = styled.div`
    background-color: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 8px;

    svg{
        color: ${props => props.theme["purple"]};

        &:hover{
            color: ${props => props.theme["purple-dark"]};
        }
    }
`

export const MinusButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme["base-button"]}; 
` 