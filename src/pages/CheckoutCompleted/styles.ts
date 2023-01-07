import styled from "styled-components";
import {ImagesSVG} from "../Home/styles"

export const CheckoutCompletedContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 4rem;
    gap: 5rem;

     @media (max-width: 1100px)  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0rem;
        margin-bottom: 2rem;

        img{
            width: 28rem;
        }
    }

    img{
        margin-top: 8rem;
        max-width: 30rem;
    }
`

export const CompletedOrder = styled.div``

export const CompletedOrderHeader = styled.div`
    margin-bottom: 2rem;

    h2{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 32px;
        color: ${props => props.theme["yellow-dark"]};
        margin-bottom: 1rem;
    }

    > p{
        font-size: 20px;
        color: ${props => props.theme["base-subtitle"]};
    }
`
export const CompletedOrderContainer = styled.div`
  padding: 2rem;
  border-radius: 6px 36px;
  position: relative;
  background: ${props => props.theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

`

export const CompletedOrderContent = styled.div`
   display: flex;
   align-items: center;
   margin: 1rem 0;
`

export const MapContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["purple-dark"]};
`

export const TimerContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["yellow"]};
`

export const DollarContainer = styled(ImagesSVG)`
    background-color: ${props => props.theme["yellow-dark"]};
`