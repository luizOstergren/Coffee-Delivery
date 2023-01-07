import styled from "styled-components";

export const CheckoutPaymentMethodsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
`

export const PaymentError = styled.div`
    grid-column: span 3;
    color: ${({ theme }) => theme["text-error"]};
    font-size: 14px;
`