import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 4rem;
    margin-bottom: 2rem;
`

export const CheckoutCoffes = styled.div`
    h3{
        margin-bottom: 1rem;   
    }
`

export const RequestContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    border-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
`

export const RequestTotalItensContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RequestTotalItens = styled(RequestTotalItensContainer)`
    font-size: 14px;
    color: ${props => props.theme["base-text"]}; 
`

export const RequestDelivery = styled(RequestTotalItensContainer)`
    color: ${props => props.theme["base-text"]}; 
    font-size: 14px;
`

export const RequestTotal = styled(RequestTotalItensContainer)`
    color: ${props => props.theme["base-subtitle"]}; 
    font-size: 20px;
    font-weight: 700;
`

export const RequestConfirmOrder = styled.button`
    background-color: ${props => props.theme["yellow"]};
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    color: ${props => props.theme["white"]}; 
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    margin-top: 2rem;

    &:hover{
        background-color: ${props => props.theme["yellow-dark"]};
    }
`

