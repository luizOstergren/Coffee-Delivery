import { Money, Bank, CreditCard } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentInput } from "./PaymentInput";
import { CheckoutPaymentMethodsContainer, PaymentError } from "./styles";

export const paymentOptions = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={18} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={18} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={18} />,
  },
};

export function CheckoutPaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <CheckoutPaymentMethodsContainer>
      {Object.entries(paymentOptions).map(([key, { label, icon }]) => (
        <PaymentInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && <PaymentError>{paymentMethodError}</PaymentError>}
    </CheckoutPaymentMethodsContainer>
  );
}
