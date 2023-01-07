import styled from "styled-components";

export const ProdutcsContainer = styled.div``

export const ProductContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    max-width: 14.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.3rem;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
`

export const ProductImage = styled.div`
    margin-top: -2.5rem;
`

export const Ingredients = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.2rem;

    span{
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        padding: 0.3rem 0.5rem;
        border-radius: 20px;
    }
`

export const ProductName = styled.div`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
`

export const ProductDescription = styled.div`
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    display: flex;
    text-align: center;
    margin-bottom: 0.5rem;
`

export const DescriptionProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-height: 11rem;
`

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const ProductPrice = styled.div`
    span{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
    }
`

export const QuantityProducts = styled.div`
    display: flex;
    gap: 0.2rem;
    
`

export const Cart = styled.button`
    background-color: ${props => props.theme["purple-dark"]};
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 0.5rem;
    color: ${props => props.theme["white"]};
    border: none;
    cursor: pointer;

    &:hover{
    background-color: ${props => props.theme["purple"]};
    }

    &:disabled{
       background-color: ${props => props.theme["purple-light"]};
       cursor: not-allowed;
    }
`
