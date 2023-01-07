import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
`;

interface InputContainerProps {
    hasError: boolean;
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme["base-button"]};
  background: ${props => props.theme["base-input"]};
  display: flex;
  align-items: center;
  transition: 0.4s;
  overflow: hidden;
  z-index: 1;
  
  &:focus-within {
    border-color: ${props => props.theme["yellow-dark"]};
  }
`;

export const InputAdress = styled.input`
  flex: 1;
  background: none;
  padding-left: 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${props => props.theme["base-text"]};
  border: 0px solid;
  z-index: 10;

  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }

  &:focus-within {
    border-color: ${props => props.theme["yellow-dark"]};
    outline: none;
}
`;

export const RightText = styled.span`
  font-size: small;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${props => props.theme["base-label"]};
`;

export const ErrorText = styled.p`
  color: ${props => props.theme["text-error"]};
  font-size: 14px;
`