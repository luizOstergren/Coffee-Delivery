import styled from "styled-components";


export const IntroductionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 5rem 0;
    gap: 4rem;

    @media (max-width: 850px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
    }

    h1{
        font-family: 'Baloo2', sans-serif;
        font-weight: 800;
        color: ${props => props.theme["base-title"]};
        line-height: 160%;
        margin-bottom: 1rem;
    }
   
   span{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 20px;
   }
`

export const IntroductionTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DescriptionContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   justify-content: center;
   margin-top: 3rem;
   gap: 1rem;
   color: ${props => props.theme["base-text"]};
   
   span{
    font-size: 14px;
   }
`

export const DescriptionItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

export const ImagesSVG = styled.div`
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    margin-right: 0.6rem;
    color: ${props => props.theme["white"]};
`

export const ShoppingCartContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["yellow-dark"]};
`

export const PackageContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["base-text"]};
`

export const TimerContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["yellow"]};
`

export const CoffeeContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["purple-dark"]};
`