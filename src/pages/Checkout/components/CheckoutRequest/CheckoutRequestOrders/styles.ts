import styled from "styled-components"

export const RequestContent = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme["base-hover"]};
    padding-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
 
    img{
        width: 4rem;
    }    

    &+&{
        padding-top: 1.5rem; 
    }
`

export const RequestOrder = styled.div`
    flex:1;
    p{
        padding-bottom: 0.5rem;
        font-size: 16px;
        color: ${props => props.theme["base-subtitle"]}; 
    }
`

export const RequestQuantityOrders = styled.div`
    display: flex;
    gap: 0.8rem;
`
export const RequestRemove = styled.button`
   background-color: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    gap: 0.3rem;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${props => props.theme["base-button"]};
    font-size: 12px;
    text-transform: uppercase;
    color: ${props => props.theme["base-text"]}; 


    svg{
        color: ${props => props.theme["purple"]}; 
    }
    
    &:hover{
         background-color: ${props => props.theme["base-hover"]};

        svg{
            color: ${props => props.theme["purple-dark"]};
        }
    }
`

export const RequestPrice = styled.div`
    font-weight: 700;
    font-size: 16px;
`
