import { forwardRef, InputHTMLAttributes } from "react";
import {
  InputWrapper,
  InputStyleContainer,
  InputAdress,
  RightText,
  ErrorText,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputStyleContainer hasError={!!error}>
          <InputAdress ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    );
  }
);
