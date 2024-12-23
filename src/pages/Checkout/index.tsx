import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { CheckoutRequest } from "./components/CheckoutRequest";

import { CompleteOrderContainer } from "./styles";
import { CompleteDeliveryForm } from "./components/CheckoutDeliveryForm";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidation = zod.object({
  cep: zod.string().min(6, "Informe o CEP"),
  street: zod.string().min(2, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(2, "Informe o Bairro"),
  city: zod.string().min(2, "Informe a Cidade"),
  uf: zod.string().min(2, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidation>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidation),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/completedOrder", {
      state: data,
    });
    cleanCart();
  }

  return (
    <>
      <FormProvider {...confirmOrderForm}>
        <CompleteOrderContainer as="button"
          className="container"
          onSubmit={handleSubmit(handleConfirmOrder)}
        >
          <CompleteDeliveryForm />
          <CheckoutRequest />
        </CompleteOrderContainer>
      </FormProvider>
    </>
  );
}
