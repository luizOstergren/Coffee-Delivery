import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`

export const BuyContent = styled.div`
    display: flex;
    align-items: center;    
    gap: 1rem;
`

export const LocationContent = styled.div`
    display: flex;
    align-items: center;
    background: ${props => props.theme["purple-light"]};
    padding: 0.5rem;
    gap: 0.3rem;
    border-radius: 8px;
    color: ${props => props.theme["purple-dark"]};
`

export const ShoppingCartContent = styled.nav`
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme["yellow-light"]};
    line-height: 0;
    cursor: pointer;
    position: relative;

    svg{
        color: ${props => props.theme["yellow-dark"]};
    }
`

export const ShoppingCartItems = styled.div`
    border-radius: 50%;
    background-color: ${props => props.theme["yellow-dark"]};
    padding: 0.1rem;
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme["yellow"]};
    position: absolute;
    top: -5px;
    right: -5px;

    p{
        position: absolute;
        top: 50%;
        right: -15%;
        
        text-align: center;
        letter-spacing: -0.06em;
        color: ${props => props.theme["white"]};
        width: 20px;
        height: 20px;
        font-weight: 700;
        font-size: 12px;
    }
`