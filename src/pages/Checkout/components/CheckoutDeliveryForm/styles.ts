import styled from "styled-components"


export const CheckoutDelivery = styled.div`
   h3{
        margin-bottom: 1rem;
        font-family: 'Baloo 2';
   }  
`

export const DeliveryContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    border-radius: 6px;
    margin-bottom: 1rem;
`

export const SubtitleDelivery = styled.div`
    margin-bottom: 0.6rem;
    margin-left: 1.8rem;
    font-size: 14px;
    color: ${props => props.theme["base-text"]};
`

export const HeaderDelivery = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${props => props.theme["base-subtitle"]};

    svg{
        color: ${props => props.theme["yellow-dark"]};
        margin-right: 0.5rem;
    }
`

export const PaymentContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    border-radius: 6px;
    margin-bottom: 1rem;

    p{
        margin-bottom: 0.6rem;
        margin-left: 1.8rem;
        font-size: 14px;
        color: ${props => props.theme["base-text"]};
    }
`

export const PaymentHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 400;

    svg{
        color: ${props => props.theme["purple"]};
        margin-right: 0.5rem;
    }
`

export const PaymentForm = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;
`

export const PaymentButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-button"]};
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    font-size: 12px;
    padding: 1rem;
    gap: 0.4rem;

    &:active{
         background-color: ${props => props.theme["purple-light"]};
         border: 1px solid ${props => props.theme["purple"]};
        }

    &:hover{
         background-color: ${props => props.theme["base-hover"]};
    }

    svg{
        color:  ${props => props.theme["purple"]};
    }
`

export const PaymentCredit = styled(PaymentButton)`
    width: 100%;
`

export const PaymentDebit = styled(PaymentButton)`
    width: 100%;
`

export const PaymentCash = styled(PaymentButton)`
    width: 100%;   
`